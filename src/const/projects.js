export const projects = [
    {
      id: 1,
      name: 'Nube y Local con Autenticación WebAuthn',
      description:
        'Aplicación que permite gestionar contraseñas de forma segura con autenticación WebAuthn de manera local o en la nube.',
      technologies: [
        { name: 'NextJS', icon: 'NextJS' },
        { name: 'Tailwind', icon: 'Tailwind' },
        { name: 'MongoDB', icon: 'Mongo' }
      ],
      url: null,
      github: 'https://github.com/GeorgeContreras241/G--Project-Sena',
      image: './images/project07.webp',
      state: true

    },
    {
      id: 2,
      name: 'Local - Gestor de Contraseñas',
      description:
        'Aplicación local segura para gestionar contraseñas. Las contraseñas se encriptan en el frontend y no se almacenan en la base de datos, garantizando que solo el usuario pueda desencriptarlas con su clave maestra.',
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
        'Aplicación web que permite al usuario a través del Riot Tag de League of Legends buscar información de sus partidas y live games. Gestionando la API de Riot Games a través de NextJS y cacheando la información para que no se sobrecargue el servidor. Mediante uso de MongoDB y localStorage.',
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
