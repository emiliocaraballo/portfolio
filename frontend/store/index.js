import { v4 as uuidv4 } from "uuid";

export const state = () => ({
  projectsHeading: "Portafolio de Proyectos",
  projectsDescription: "Algunos de los proyectos que he realizado con éxito",
  projects: [
    {
      id: "sarku-japan",
      title: "Sarku japan",
      category: "Web Application",
      img: "images/sarku-japan.png",
      publishDate: "Diciembre 04, 2020",
      tag: "Frontend & Backend Development",
      clientTitle: "Sobre el cliente",
      objectivesTitle: "Objetivo",
      objectivesDetails:
        "Ecommerce para restaurante donde puedes comprar en diferentes ciudades de Colombia y realizar el pago en Efectivo, Datáfono y Tarjeta de Crédito.",
      techTitle: "Herramientas y Tecnologías",
      detailsTitle: "Desafío",
      socialTitle: "Compartir",
      projectImages: [
        {
          id: uuidv4(),
          title: "Sarku japan",
          img: "/images/sarku-japan-p.png",
        },
        {
          id: uuidv4(),
          title: "Sarku japan",
          img: "/images/sarku-japan-1.png",
        },
        {
          id: uuidv4(),
          title: "Sarku japan",
          img: "/images/sarku-japan-2.png",
        },
        // {
        //   id: uuidv4(),
        //   title: "Kabul Project Management UI",
        //   img: "../images/web-project-1.jpg",
        // },
        // {
        //   id: uuidv4(),
        //   title: "Kabul Project Management UI",
        //   img: "../images/web-project-2.jpg",
        // },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: "Nombre",
          details: "Sarku japan",
        },
        {
          id: uuidv4(),
          title: "Servicio",
          details: "Una cadena de comida rápida",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://www.sarkujapan.co",
        },
      ],
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Nuxt.js",
        "PHP",
        "Bootstrap",
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "Sarku japan es una cadena de comida rápida japonesa que funciona en 6 ciudades, distribuidas en 23 restaurantes.",
        },
        {
          id: uuidv4(),
          details:
            "En este proyecto se realizó un ecommerce personalizado para la empresa donde se cuenta con registro de usuario, login, producto, categoría, tipo de venta, mapa de ciudades, carrito, pasarela de pago y WebService de terceros.",

        }
      ],
      socialSharings: [
        {
          id: uuidv4(),
          name: "Instagram",
          icon: "instagram",
          url: "https://www.instagram.com/sarkujapancolombia",
        },
        {
          id: uuidv4(),
          name: "Facebook",
          icon: "facebook",
          url: "https://www.facebook.com/SarkuJapanColombia",
        },
        {
          id: uuidv4(),
          name: "Youtube",
          icon: "youtube",
          url: "https://www.youtube.com/c/sarkujapancolombia",
        },
      ],
    },
    {
      id: "maria-salome",
      title: "Maria salome",
      category: "Web Application",
      img: "images/maria-salome.png",
      publishDate: "Marzo 24, 2021",
      tag: "Frontend & Backend Development",
      clientTitle: "Sobre el cliente",
      objectivesTitle: "Objetivo",
      objectivesDetails:
        "Ecommerce para productos de Shampoos, Lociones, Serum, Cremas, Acondicionadores, Mascarillas donde puedes comprar en todo el pais y realizar el pago en PSE.",
      techTitle: "Herramientas y Tecnologías",
      detailsTitle: "Desafío",
      socialTitle: "Compartir",
      projectImages: [
        {
          id: uuidv4(),
          title: "Maria salome",
          img: "/images/maria-salome-p.png",
        },
        {
          id: uuidv4(),
          title: "Maria salome",
          img: "/images/maria-salome-1.png",
        },
        {
          id: uuidv4(),
          title: "Maria salome",
          img: "/images/maria-salome-2.png",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: "Nombre",
          details: "Maria salome",
        },
        // {
        //   id: uuidv4(),
        //   title: "Servicio",
        //   details: "",
        // },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://www.mariasalome.com",
        }
      ],
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Vue.js",
        "Bootstrap",
        "PHP",
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "María Salomé cuenta con un amplio portafolio de productos orientados al cuidado capilar que te brindan justo lo que necesitas.",
        },
        {
          id: uuidv4(),
          details:
            "En este proyecto se realizó un ecommerce personalizado para la empresa donde se cuenta con registro de usuario, login, productos, categoría, carrito, pasarela de pago, integraciones de envío y entre otra funcionalidades.",
        }
      ],
      socialSharings: [
        {
          id: uuidv4(),
          name: "Instagram",
          icon: "instagram",
          url: "https://www.instagram.com/labmariasalome",
        }
      ],
    },
    {
      id: "ixora-condominio",
      title: "Ixora condominio",
      category: "Web Application",
      img: "/images/ixora-condominio.png",
      publishDate: "Diciembre 15, 2021",
      tag: "Frontend & Backend Development",
      clientTitle: "Sobre el cliente",
      objectivesTitle: "Objetivo",
      objectivesDetails:
        "Pagina web informativa",
      techTitle: "Herramientas y Tecnologías",
      detailsTitle: "Desafío",
      socialTitle: "Compartir",
      projectImages: [
        {
          id: uuidv4(),
          title: "Ixora condominio",
          img: "/images/ixoracondominio-p.png",
        },
        {
          id: uuidv4(),
          title: "Ixora condominio",
          img: "/images/ixoracondominio-1.png",
        },
        {
          id: uuidv4(),
          title: "Ixora condominio",
          img: "/images/ixoracondominio-2.png",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: "Nombre",
          details: "Ixora condominio",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://ixoracondominio.com",
        }
      ],
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Boostrap",
        "PHP",
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "Ixora Condominio se encuentra ubicado en una zona de alta valorización, consolidada y exlusiva de la ciudad de Cartagena.",
        },
        {
          id: uuidv4(),
          details:
            "En este proyecto fue facil. solo me tomo un dia realizar ya que solo es informativo con apena 2 formulario.",
        }
      ],
      socialSharings: [
      ],
    },
    // {
    //   id: "compre-colombiano",
    //   title: "Compre colombiano",
    //   category: "Web Application",
    //   img: "images/compre-colombiano.png",
    //   publishDate: "Nov 04, 2021",
    //   tag: "Web / Frontend",
    //   clientTitle: "Sobre el cliente",
    //   objectivesTitle: "Objetivo",
    //   objectivesDetails:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
    //   techTitle: "Herramientas y Tecnologías",
    //   detailsTitle: "Desafío",
    //   socialTitle: "Compartir",
    //   projectImages: [
    //     // {
    //     //   id: uuidv4(),
    //     //   title: "Cloud Storage Platform",
    //     //   img: "../images/web-project-1.jpg",
    //     // },
    //     // {
    //     //   id: uuidv4(),
    //     //   title: "Cloud Storage Platform",
    //     //   img: "../images/web-project-2.jpg",
    //     // },
    //     // {
    //     //   id: uuidv4(),
    //     //   title: "Cloud Storage Platform",
    //     //   img: "../images/mobile-project-2.jpg",
    //     // },
    //   ],
    //   companyInfos: [
    //     {
    //       id: uuidv4(),
    //       title: "Nombre",
    //       details: "Company Ltd",
    //     },
    //     {
    //       id: uuidv4(),
    //       title: "Servicios",
    //       details: "UI Design & Frontend Development",
    //     },
    //     {
    //       id: uuidv4(),
    //       title: "Website",
    //       details: "https://company.com",
    //     },
    //     {
    //       id: uuidv4(),
    //       title: "Phone",
    //       details: "555 8888 888",
    //     },
    //   ],
    //   technologies: [
    //     "HTML",
    //     "CSS",
    //     "JavaScript",
    //     "Nuxt.js",
    //     "TailwindCSS",
    //     "AdobeXD",
    //   ],
    //   projectDetails: [
    //     {
    //       id: uuidv4(),
    //       details:
    //         "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
    //     },
    //     {
    //       id: uuidv4(),
    //       details:
    //         "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
    //     },
    //     {
    //       id: uuidv4(),
    //       details:
    //         "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
    //     },
    //     {
    //       id: uuidv4(),
    //       details:
    //         "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
    //     },
    //   ],
    //   socialSharings: [
    //     {
    //       id: uuidv4(),
    //       name: "Twitter",
    //       icon: "twitter",
    //       url: "https://twitter.com/realstoman",
    //     },
    //     {
    //       id: uuidv4(),
    //       name: "Instagram",
    //       icon: "instagram",
    //       url: "https://instagram.com/realstoman",
    //     },
    //     {
    //       id: uuidv4(),
    //       name: "Facebook",
    //       icon: "facebook",
    //       url: "https://facebook.com/",
    //     },
    //     {
    //       id: uuidv4(),
    //       name: "LinkedIn",
    //       icon: "linkedin",
    //       url: "https://linkedin.com/",
    //     },
    //     {
    //       id: uuidv4(),
    //       name: "Youtube",
    //       icon: "youtube",
    //       url: "https://www.youtube.com/c/StomanStudio",
    //     },
    //   ],
    // },
    {
      id: "mercado-mambo",
      title: "Mercado mambo",
      category: "Web Application",
      img: "images/mercado-mambo.png",
      publishDate: "Mar 04, 2020",
      tag: "Frontend & Backend Development",
      clientTitle: "Sobre el cliente",
      objectivesTitle: "Objetivo",
      objectivesDetails:
        "Ecommerce para alimentos",
      techTitle: "Herramientas y Tecnologías",
      detailsTitle: "Desafío",
      socialTitle: "Compartir",
      projectImages: [
        {
          id: uuidv4(),
          title: "Mercado mambo",
          img: "/images/mercado-mambo-p.png",
        },
        {
          id: uuidv4(),
          title: "Mercado mambo",
          img: "/images/mercado-mambo-1.png",
        },
        {
          id: uuidv4(),
          title: "Mercado mambo",
          img: "/images/mercado-mambo-2.png",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: "Nombre",
          details: "Mercado mambo",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://mercadomambo.com",
        }
      ],
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Vue.js",
        "Boostrap",
        "PHP",
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "Mambo nace a comienzos del 2000 de la necesidad de ofrecer al público una selección de frutas y verduras de gran calidad y fácil manejo.",
        },
        {
          id: uuidv4(),
          details:
            "En este proyecto se realizó un ecommerce personalizado para la empresa donde se cuenta con registro de usuario, login, producto, categoría, carrito, pasarela de pago y entre otra funcionalidades.",
        }
      ],
      socialSharings: [
        {
          id: uuidv4(),
          name: "Instagram",
          icon: "instagram",
          url: "https://www.instagram.com/mamboisgood",
        }
      ],
    },
    {
      id: "santo-azul",
      title: "Santo azul",
      category: "Web Application",
      img: "images/santo-azul.png",
      publishDate: "Febrero 20, 2020",
      tag: "Frontend & Backend Development",
      clientTitle: "Sobre el cliente",
      objectivesTitle: "Objetivo",
      objectivesDetails:
        "",
      techTitle: "Herramientas y Tecnologías",
      detailsTitle: "Desafío",
      socialTitle: "Compartir",
      projectImages: [
        {
          id: uuidv4(),
          title: "Santo azul",
          img: "/images/santo-azul-p.png",
        },
        {
          id: uuidv4(),
          title: "Santo azul",
          img: "/images/santo-azul-1.png",
        },
        {
          id: uuidv4(),
          title: "Santo azul",
          img: "/images/santo-azul-2.png",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: "Nombre",
          details: "Santo azul",
        },
        {
          id: uuidv4(),
          title: "Servicios",
          details: "Ropa y accesorio",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://www.santoazulsw.com/es/",
        }
      ],
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Vue.js",
        "Boostrap",
        "PHP",
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "Santo Azul es una marca colombiana dedicada a la confección de vestidos de baño y ropa de verano personalizada",
        },
        {
          id: uuidv4(),
          details:
            "En este proyecto se realizó un ecommerce personalizado para la empresa donde se cuenta con registro de usuario, login, producto, categoría, carrito, pasarela de pago y entre otra funcionalidades.",
        }
      ],
      socialSharings: [
        {
          id: uuidv4(),
          name: "Instagram",
          icon: "instagram",
          url: "https://www.instagram.com/santoazulsw/",
        }
      ],
    },
    {
      id: "smartinfo",
      title: "Smartinfo",
      category: "Web Application",
      img: "images/smartinfo.png",
      publishDate: "Nov 14, 2019",
      tag: "UI / Mobile",
      clientTitle: "Sobre el cliente",
      objectivesTitle: "Objetivo",
      objectivesDetails:
        "Empresa de software para la web",
      techTitle: "Herramientas y Tecnologías",
      detailsTitle: "Desafío",
      socialTitle: "Compartir",
      projectImages: [
        {
          id: uuidv4(),
          title: "Smartinfo",
          img: "/images/smartinfo-p.png",
        },
        {
          id: uuidv4(),
          title: "Smartinfo",
          img: "/images/smartinfo-1.png",
        },
        {
          id: uuidv4(),
          title: "Smartinfo",
          img: "/images/smartinfo-2.png",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: "Nombre",
          details: "Smartinfo",
        },
        {
          id: uuidv4(),
          title: "Servicios",
          details: "UI Design, Frontend & Backend Development",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://www.smartinfobusiness.com",
        }
      ],
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Boostrap",
        "PHP",
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "Smartinfo es una empresa colombiana, concebida para ofrecer soluciones de inteligencia de negocios, tecnología de información y mercadeo digital.",
        },
        {
          id: uuidv4(),
          details:
            "",
        }
      ],
      socialSharings: [
        {
          id: uuidv4(),
          name: "Instagram",
          icon: "instagram",
          url: "https://www.instagram.com/smartinfo.co",
        },
        {
          id: uuidv4(),
          name: "Facebook",
          icon: "facebook",
          url: "https://www.facebook.com/smartinfoco",
        },
        {
          id: uuidv4(),
          name: "LinkedIn",
          icon: "linkedin",
          url: "https://www.linkedin.com/company/smartinfo-sas/",
        }
      ],
    },
  ],
  clientsHeading: "Algunas de las marcas con las que trabajé",
  clients: [
    {
      id: uuidv4(),
      title: "Amazon",
      img: "../brands/amazon_gray.png",
    },
    {
      id: uuidv4(),
      title: "Sony",
      img: "../brands/sony_gray.png",
    },
    {
      id: uuidv4(),
      title: "Adidas",
      img: "../brands/adidas_gray.png",
    },
    {
      id: uuidv4(),
      title: "FILA",
      img: "../brands/fila_gray.png",
    },
    {
      id: uuidv4(),
      title: "NB",
      img: "../brands/nb_gray.png",
    },
    {
      id: uuidv4(),
      title: "SAMSUNG",
      img: "../brands/samsung_gray.png",
    },
    {
      id: uuidv4(),
      title: "CANON",
      img: "../brands/canon_gray.png",
    },
    {
      id: uuidv4(),
      title: "PUMA",
      img: "../brands/puma_gray.png",
    },
  ],
  aboutMe: [
    {
      id: uuidv4(),
      bio: "Un buscador de soluciones opmizada, apasionado de laboral en esta area donde avanza constantemente la tecnología para el desarrollo de aplicaciones web, microservicio, contenedores entre otra cosa.",
    },
    {
      id: uuidv4(),
      bio: "Soy una persona movada, ambiciosa, apasionada a la que le gusta superar retos en programación para alcanzar metas y crecer año tras año.",
    },
    {
      id: uuidv4(),
      bio: "Desarrollo productos a nivel modular para reulización de código para otros proyectos similares.",
    },
    {
      id: uuidv4(),
      bio: "Colaboro en la planificación de proyectos y reviso las funcionalidades del equipo y propongo soluciones cuando surgen dificultades en el proceso.",
    },
    {
      id: uuidv4(),
      bio: "He realizado mas de 50 Proyectos ya finalizado.",
    },
    {
      id: uuidv4(),
      bio: "Mas de 2 años de experiencia",
    },
  ],
  copyrightDate: new Date().getFullYear(),
  socialProfiles: [
    {
      id: uuidv4(),
      name: "GitHub",
      icon: "github",
      url: "https://github.com/emiliocaraballo",
    },
    // {
    //   id: uuidv4(),
    //   name: "Twitter",
    //   icon: "twitter",
    //   url: "https://twitter.com/realstoman",
    // },
    // {
    //   id: uuidv4(),
    //   name: "Medium",
    //   icon: "book",
    //   url: "https://stoman.medium.com",
    // },
    {
      id: uuidv4(),
      name: "Instagram",
      icon: "instagram",
      url: "https://www.instagram.com/emilio_fernando_98",
    },
  ],
  categories: [
    {
      id: uuidv4(),
      value: "web",
      name: "Web Application",
    }
  ],
});

export const getters = {
  getProjectById: (state) => (id) => {
    return state.projects.find((project) => project.id == id);
  },
};

export const mutations = {
  // Todo
};

export const actions = {
  // Todo
};

/*
ixoracondominio (ok)
Compre colombiano (ok)
mariasalome (ok)
sarkujapan (ok)
Websagro ----
Santo azul
mercadomambo (ok)
Diabetrics  ---
Capacitaciones
Smartinfo (ok)
Gaseras web ---
Gasera brilla ---
*/
