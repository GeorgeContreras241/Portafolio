export const projects = [
    {
      id: 1,
      name: 'ClaveVault',
      description:
        'Gestor de contraseñas con autenticación biométrica WebAuthn. Soporta modo local y nube.',
      highlight: 'Autenticación segura sin contraseñas maestras',
      technologies: [
        { name: 'Next.js', icon: 'Next' },
        { name: 'Tailwind', icon: 'Tailwind' },
        { name: 'MongoDB', icon: 'Mongo' }
      ],
      url: "https://g-clavevault.vercel.app/",
      github: 'https://github.com/GeorgeContreras241/G--ClaveVault',
      image: './images/ClaveVault.png',
      state: true
    },
    {
      id: 2,
      name: 'Calculadora de Techos PVC y Piso SPC',
      description:
        'Aplicación usada en un almacén para calcular de manera rápida las cotizaciones de techo y piso.',
      highlight: 'Diseño responsivo y moderno con React y Tailwind',
      technologies: [
        { name: 'React', icon: 'React' },
        { name: 'Tailwind', icon: 'Tailwind' }
      ],
      url: '',
      github: 'https://github.com/GeorgeContreras241',
      image: './images/calculatorAlmoHogar.png',
      state: false
    },
    {
      id: 3,
      name: 'Ward Spy',
      description:
        'App web para consultar stats de League of Legends en tiempo real vía Riot API.',
      highlight: 'Caché inteligente para evitar rate limits de la API',
      technologies: [
        { name: 'Next.js', icon: 'Next' },
        { name: 'Tailwind', icon: 'Tailwind' },
        { name: 'MongoDB', icon: 'Mongo' }
      ],
      url: "https://ward-spy.vercel.app/",
      github: 'https://github.com/GeorgeContreras241/Ward-Spy',
      image: './images/WarpSky.png',
      state: true
    }
  ];
