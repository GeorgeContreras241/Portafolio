export const projects = [
    {
      id: 1,
      name: 'Nube - Gestor de Contraseñas',
      description:
        'Aplicación Full Stack segura para gestionar contraseñas. Las contraseñas se encriptan en el frontend antes de almacenarse en la base de datos, garantizando que solo el usuario pueda desencriptarlas con su clave maestra.',
      technologies: [
        { name: 'React', icon: 'React' },
        { name: 'Tailwind', icon: 'Tailwind' },
        { name: 'ExpressJS', icon: 'Express' },
        { name: 'MongoDB', icon: 'Mongo' }
      ],
      url: null,
      github: 'https://github.com/GeorgeContreras241/G-Password_manager',
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
        'Aplicacion Web que permite al usuario a travez del riotTag de League of Legends buscar informacion de sus partidas y live game. Gestionando la API de Riot Games a travez de NextJS y cacheando la informacion para que no se sobrecargue el servidor. Mediante uso de MongoDB y localStorage. ',
      technologies: [
        { name: 'NextJS', icon: 'NextJS' },
        { name: 'Tailwind', icon: 'Tailwind' },
        { name: 'MongoDB', icon: 'Mongo' }
      ],
      url: "https://ward-spy.vercel.app/",
      github: 'https://github.com/GeorgeContreras241/Ward-Spy',
      image: './images/project09.webp',
      state: true
    },
    {
      id: 5,
      name: 'Carrito de Compras',
      description:
        'Ejercicio de carrito de compras con React y Tailwind CSS.',
      technologies: [
        { name: 'React', icon: 'React' },
        { name: 'Tailwind CSS', icon: 'Tailwind' }
      ],
      url: "https://store-api-sage.vercel.app/",
      github: 'https://github.com/GeorgeContreras241/G-Store_Api',
      image: './images/project04.webp',
      state: false
    }
  ];
