export const projects = [
    {
      id: 1,
      name: 'Nube y Local con Autenticación WebAuthn',
      description:
        'Gestor de contraseñas con autenticación biométrica WebAuthn. Soporta modo local y nube.',
      highlight: 'Autenticación segura sin contraseñas maestras',
      technologies: [
        { name: 'NextJS', icon: 'NextJS' },
        { name: 'Tailwind', icon: 'Tailwind' },
        { name: 'MongoDB', icon: 'Mongo' }
      ],
      url: "https://g-clavevault.vercel.app/",
      github: 'https://github.com/GeorgeContreras241/G--ClaveVault.git',
      image: './images/project07.webp',
      state: true

    },
    {
      id: 2,
      name: 'Local - Gestor de Contraseñas',
      description:
        'Gestor local con encriptación en frontend. Las contraseñas nunca salen del navegador.',
      highlight: 'Cero dependencias de servidor para datos sensibles',
      technologies: [
        { name: 'React', icon: 'React' },
        { name: 'Tailwind', icon: 'Tailwind' }
      ],
      url: 'https://g-local-password-manager.vercel.app/',
      github: 'https://github.com/GeorgeContreras241/G-Local-password-manager',
      image: './images/project06.webp',
      state: false
    },
    {
      id: 4,
      name: 'Ward Spy',
      description:
        'App web para consultar stats de League of Legends en tiempo real vía Riot API.',
      highlight: 'Cache inteligente para evitar rate limits de la API',
      technologies: [
        { name: 'NextJS', icon: 'NextJS' },
        { name: 'Tailwind', icon: 'Tailwind' },
        { name: 'MongoDB', icon: 'Mongo' }
      ],
      url: "https://ward-spy.vercel.app/",
      github: 'https://github.com/GeorgeContreras241/Ward-Spy',
      image: './images/project09.webp',
      state: true
    }
  ];
