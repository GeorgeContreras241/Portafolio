import sharp from 'sharp';
import { readdir, readFile, writeFile } from 'fs/promises';
import { join, extname, relative } from 'path';
import { mkdirSync } from 'fs';

const PUBLIC_DIR = join(process.cwd(), 'public');
const OUT_DIR = join(process.cwd(), 'public', 'optimized');
const MAX_WIDTH = 1200;
const QUALITY = 80;

async function getFiles(dir) {
  const results = [];
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === 'logo' || entry.name === 'optimized') continue;
      results.push(...await getFiles(fullPath));
    } else {
      const ext = extname(entry.name).toLowerCase();
      if (['.png', '.jpg', '.jpeg', '.webp'].includes(ext)) {
        results.push(fullPath);
      }
    }
  }
  return results;
}

const projectFiles = await getFiles(join(PUBLIC_DIR, 'images'));
const logoDir = join(PUBLIC_DIR, 'logo');
const logoEntries = await readdir(logoDir, { withFileTypes: true });
const logoFiles = logoEntries
  .filter(e => !e.isDirectory() && ['.png', '.jpg', '.jpeg', '.webp'].includes(extname(e.name).toLowerCase()))
  .map(e => join(logoDir, e.name));

mkdirSync(join(OUT_DIR, 'images'), { recursive: true });
mkdirSync(join(OUT_DIR, 'logo'), { recursive: true });

const allFiles = [...projectFiles, ...logoFiles];
console.log(`Processing ${allFiles.length} images...\n`);

for (const filePath of allFiles) {
  try {
    const data = await readFile(filePath);
    const originalSize = data.length;
    const metadata = await sharp(data).metadata();
    const isLogo = filePath.includes('logo');
    const width = isLogo ? 200 : Math.min(metadata.width || MAX_WIDTH, MAX_WIDTH);

    const outputBuffer = await sharp(data)
      .resize(width, null, { withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toBuffer();

    const relPath = relative(PUBLIC_DIR, filePath);
    const outRel = relPath.replace(extname(relPath), '.webp');
    const outPath = join(OUT_DIR, outRel);

    mkdirSync(join(outPath, '..'), { recursive: true });
    await writeFile(outPath, outputBuffer);

    const saved = ((1 - outputBuffer.length / originalSize) * 100).toFixed(1);
    const name = filePath.split(/[\\/]/).pop();
    console.log(`  ${name}: ${(originalSize/1024).toFixed(1)}KB -> ${(outputBuffer.length/1024).toFixed(1)}KB (${saved}% saved)`);
  } catch (e) {
    console.error(`  Error: ${filePath.split(/[\\/]/).pop()}: ${e.message}`);
  }
}

console.log(`\nDone! Optimized images in: public/optimized/`);
console.log('To apply: copy contents of optimized/ over the originals in public/');
