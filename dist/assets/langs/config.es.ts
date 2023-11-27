export const configEs = {
    profile: {
        name: "Daniel Arellano",
        role: [
            "Ingeniero Software",
            "Jefe de Proyectos",
            "Ingeniero de ciberseguridad"
        ],
        shakeHand: true,
        fastContacts: true,
        description: "Ingeniero de Software con sólidos conocimientos en desarrollo software, gestión de equipos y ciberseguridad. Reconocido por mi enfoque resolutivo y dedicación al trabajo, siendo mis principales enfoques la eficiencia y la calidad. Desarrollo productos en mi tiempo libre y busco especializarme en la gestión de proyectos software.",
        location: "Sevilla, España",
        locationFlag: "flags/es.svg"
    }, 
    qualifications: [
        {
            title: "Máster en Gestión TI",
            starts: "Octubre 2022",
            ends: "Julio 2023",
            location: "Universidad de Sevilla",
            text: ""
        },
        {
            title: "Máster en Ciberseguridad",
            starts: "Octubre 2021",
            ends: "Septiembre 2022",
            location: "Univesidad de Sevilla",
            text: ""
        },
        {
            title: "Grado en Ingeniería del Software",
            starts: "Septiembre 2017",
            ends: "Septiembre 2021",
            location: "Univesidad de Sevilla",
            text: ""
        },
        {
            title: "Inglés B2",
            starts: "Septiembre 2019",
            location: "Instituto de idiomas (Univesidad de Sevilla)",
            text: ""
        }
    ],
    experience: [
        {
            title: "Consultor de ciberseguridad",
            company: "Plexus Seguridad",
            starts: "Agosto 2023",
            ends: "Actualidad",
            knowledge: [
                "Liderazgo de equipos",
                "Metodología Scrum y Jira",
                "Automatizaciones con Microsoft PowerAutomate y Python",
                "Cybersecurity rating: BitSight y Security Scorecard",
                "Alerta temprana y Qualys",
            ]
        },
        {
            title: "Consultor de ciberseguridad",
            company: "Tarlogic",
            starts: "Abril 2022",
            ends: "Julio 2023",
            knowledge: [
                "Automatizaciones con Microsoft PowerAutomate y Python",
                "Crear dashboards con PowerBI y Apache Superset",
                "Alerta temprana y Qualys",
                "Metodología Scrum y Jira",
                "Desarrollar nuevas iniciativas",
            ]
        },
        {
            title: "Desarrollador de Producto Software",
            company: "Tier1",
            starts: "Julio 2020",
            ends: "Septiembre 2021",
            knowledge: [
                "Diseñar nuevas funcionalidades y soporte",
                "Java, Spring, Bootstrap, HTML, jQuery, JavaFX, Java tags, OpenAPI/Swagger",
                "Formaciones"
            ]
        }
    ],
    skills: [
        {
            group: "Ingeniería Software",
            stack: [
                {
                    name: "Java + Spring Boot + Gradle/Maven",
                    percentage: 90,
                    link: "https://github.com/danaremar/manapi/tree/develop/webflux"
                },
                {
                    name: "Angular + Bootstrap + HTML + Typescript",
                    percentage: 90,
                    link: "https://github.com/danaremar/openfolio"
                },
                {
                    name: "Python + pandas + requests + FastAPI",
                    percentage: 70
                },
                {
                    name: "Git + GitHub + CI/CD",
                    percentage: 70,
                    link: "https://github.com/danaremar"
                },
                {
                    name: "Docker",
                    percentage: 60,
                    link: "https://github.com/danaremar/manapi/tree/develop"
                },
                {
                    name: "Kubernetes",
                    percentage: 40
                },
                {
                    name: "SQL (MariaDB, MySQL, Oracle, MS Server)",
                    percentage: 70,
                    link: "https://github.com/danaremar/manapi/tree/develop/webflux"
                },
                {
                    name: "MongoDB",
                    percentage: 70,
                    link: "https://github.com/danaremar/manapi/tree/develop/webflux"
                },
            ]
        },
        {
            group: "Gestión de Proyectos",
            stack: [
                {
                    name: "Scrum",
                    percentage: 95
                },
                {
                    name: "Kanban",
                    percentage: 75
                },
                {
                    name: "PMBOK",
                    percentage: 50
                },
                {
                    name: "Jira",
                    percentage: 70
                },
                {
                    name: "Figma + Balsamiq (UX/UI)",
                    percentage: 85,
                    link: "https://www.figma.com/file/5hlsFypsYtljGoFKG80Nwp/manapi?type=design&mode=design&t=3E0gS25WF7fLN5XS-1"
                },
                {
                    name: "Microsoft Word",
                    percentage: 90,
                    link: "assets/products/manapi/manapi-doc.pdf"
                },
                {
                    name: "Microsoft Powerpoint",
                    percentage: 90,
                    link: "assets/products/manapi/manapi-slides.pdf"
                },
                {
                    name: "Análisis del Pricing",
                    percentage: 90,
                    link: "assets/products/manapi/manapi-slides.pdf"
                },
            ]
        },
        {
            group: "Ciberseguridad",
            stack: [
                {
                    name: "Criptografía + hash + certificados",
                    percentage: 90
                },
                {
                    name: "Metasploit + airodump",
                    percentage: 50
                },
                {
                    name: "Qualys + OpenVAS + nmap + Wireshark",
                    percentage: 80
                },
                {
                    name: "Gestión de vulnerabilidades",
                    percentage: 100
                },
                {
                    name: "Máquinas virtuales + Contenedores",
                    percentage: 80
                },
                {
                    name: "Security Scorecard",
                    percentage: 90
                },
                {
                    name: "ISO 27000 + NIST + OWASP",
                    percentage: 30
                },
            ]
        }
    ],
    softskills: [
        {
            name: "Colaboración",
            icon: "bi bi-people"
        },
        {
            name: "Liderazgo",
            icon: "bi bi-person-bounding-box"
        },
        {
            name: "Resolutivo",
            icon: "bi bi-bug"
        },
        {
            name: "Creatividad",
            icon: "bi bi-brush"
        }
    ],
    products: [
        {
            name: "AGIX",
            description: [
                "Solución de gestión de proyectos todo en uno, diseñada para agilizar el flujo de trabajo y aumentar la productividad. Con funciones como gestión de sprints, tareas, kanban, gantt, seguimiento del tiempo y estimaciones.",
                "Sistema basado en una arquitectura de microservicios, incorpora una API Gateway y funciona como una aplicación de una sola página. Hay varios planes disponibles, cada uno con características, tarifas y cuotas distintas. La seguridad se implementa utilizando el estándar JWT con tokens de reclamaciones.",
            ],
            secondary: "Angular + Bootstrap + Spring Boot (Java + Gradle) + MongoDB + MariaDB",
            images: [
                "products/agix/03.jpg",
                "products/agix/04.jpg",
                "products/agix/05.jpg",
                "products/agix/06.jpg",
                "products/agix/01.jpg",
                "products/agix/02.jpg",
                "products/agix/agix-kanban.png",
            ],
            sources: [
                {
                    icon: "bi bi-github",
                    link: "https://github.com/danaremar/iMan"
                },
                {
                    icon: "bi bi-easel",
                    link: "./assets/products/manapi/manapi-slides.pdf"
                },
                {
                    icon: "bi bi-file-earmark-text",
                    link: "./assets/products/manapi/manapi-doc.pdf"
                },
            ]
        },
        {
            name: "Openfolio",
            description: [
                "Portafolio personal de código abierto usando Angular y Bootstrap, que es fácilmente configurable en un solo archivo.",
                "Incluye temas claros y oscuros, con un diseño minimalista y adaptable.",
                "Se ha construido como un proyecto de código abierto, dando la oportunidad a los individuos de crear también sus propias instancias. ¡Visítelo en GitHub!"
            ],
            secondary: "Angular + Bootstrap",
            images: [
                "products/portfolio/01.jpg",
                "products/portfolio/02.jpg",
                "products/portfolio/03.jpg",
                "products/portfolio/04.jpg",
                "products/portfolio/05.jpg",
                "products/portfolio/06.jpg",
                "products/portfolio/07.jpg",
                "products/portfolio/08.jpg",
                "products/portfolio/09.jpg",
                "products/portfolio/10.jpg",
            ],
            sources: [
                {
                    icon: "bi bi-window-fullscreen",
                    link: "https://danaremar.github.io/openfolio/"
                },
                {
                    icon: "bi bi-github",
                    link: "https://github.com/danaremar/openfolio"
                }
            ]
        },
        {
            name: "Taxi trip",
            description: [
                "Análisis mediante IA de los datos de los taxis de Nueva York implica examinar distancias, precios y duración de los trayectos.",
                "El objetivo principal es aplicar varios algoritmos de agrupación para discernir patrones e identificar agrupaciones basadas en la duración y la distancia del viaje."
            ],
            secondary: "R (Caret + dbscan + ggplot2)",
            images: [
                "products/taxi/clusters.png",
                "products/taxi/clusters-2NN.png",
                "products/taxi/clusters-dbscan.png",
            ],
            sources: [
                {
                    icon: "bi bi-github",
                    link: "https://github.com/danaremar/taxi-trip-fido"
                },
                {
                    icon: "bi bi-easel",
                    link: "./assets/products/taxi/FID-G5-taxi.pdf"
                },
                {
                    icon: "bi bi-file-earmark-text",
                    link: "./assets/products/taxi/taxi_trip_fid.html"
                },
            ]
        },
        {
            name: "Juego calculadora",
            description: [
                "Juego de mejora de la respuesta mental se ha desarrollado para mejorar las capacidades cognitivas mediante sencillos cálculos matemáticos.",
                "Diseñado con Android Studio específicamente para dispositivos Android, con temas claros y oscuros."
            ],
            secondary: "Android Studio + Gradle + Material",
            images: [
                "products/calc-game/calc_game_04.jpg",
                "products/calc-game/calc_game_01.jpg",
                "products/calc-game/calc_game_05.jpg",
                "products/calc-game/calc_game_02.jpg",
                "products/calc-game/calc_game_03.jpg",
            ],
            sources: [
                {
                    icon: "bi bi-joystick",
                    link: "./assets/products/calc-game/calc-game.apk"
                }
            ]
        },
    ],
    services: [
        {
            name: "Portfolio",
            description: "Portafolio personalizado, sitio web personal o CV que muestra lo mejor de ti. Desde datos personales hasta habilidades y servicios, todo ello presentado en un diseño responsivo de primera categoría. Haz que tu presencia online sea impecable y atractiva, ¡porque te mereces destacar!",
            tags: [
                "Web estática",
                "Openfolio"
            ],
            images: [
                "products/portfolio/01.jpg",
                "products/portfolio/02.jpg",
            ],
            pricing: [
                {
                    name: "Básico",
                    description: "2 servicios + 4 productos",
                    price: "75€"
                },
                {
                    name: "Avanzado",
                    description: "5 servicios + 10 productos",
                    price: "149€"
                },
                {
                    name: "Despliegue",
                    description: "5 pequeños cambios/mes + dominio + despliegue",
                    price: "15€/mes"
                },
            ]
        },
        {
            name: "Página web",
            description: "Cree una presencia en línea impactante con nuestro diseño de sitio web estático. Ideal para empresas, tiendas, proveedores y uso personal. Adopte un diseño minimalista, adaptable y visualmente atractivo que cautive a los visitantes. Eleve su identidad online con elegancia y funcionalidad.",
            tags: [
                "Página web estática",
                "Angular",
                "Bootstrap/Tailwind",
                "HTML"
            ],
            images: [
                "products/ui-ux/figma-login.jpg",
            ],
            pricing: [
                {
                    name: "Básico",
                    description: "1 página + responsive",
                    price: "149€"
                },
                {
                    name: "Avanzado",
                    description: "3 pages + responsive + image optimization + lighthouse optimization + SEO",
                    price: "299€"
                },
                {
                    name: "Despliegue básico",
                    description: "5 pequeños cambios/mes + dominio + despliegue",
                    price: "15€/mes"
                },
                {
                    name: "Despliegue avanzado",
                    description: "15 pequeños cambios/mes + dominio + despliegue",
                    price: "30€/mes"
                },
            ]
        },
        {
            name: "API",
            description: "API REST de primera categoría creada por un experto en ciberseguridad. Equipada con documentación OpenAPI/Swagger, seguridad JWT, patrón MVC y funciones como filtrado y paginación, es una central eléctrica. Además, agiliza el despliegue con Docker, garantizando un proceso seguro y eficiente. Esta API no es solo funcional; es una obra maestra de seguridad, lista para desplegarse con facilidad.",
            tags: [
                "Spring Boot",
                "MongoDB",
                "MariaDB / MySQL",
                "OpenAPI / Swagger",
                "JWT",
                "Patrones de seguridad"
            ],
            images: [
                "products/manapi/manapi-swagger.jpg"
            ],
            pricing: [
                {
                    name: "Básico",
                    description: "2 modelos + 5 endpoints + OpenAPI + JWT + Validations",
                    price: "199€"
                },
                {
                    name: "Avanzado",
                    description: "5 models + 10 endpoints + básico + rates/cuotas + feature toggling + SSO",
                    price: "399€"
                },
                {
                    name: "Despliegue",
                    description: "Despliegue en AWS / Google / Azure",
                    price: "Desde 15€/mes"
                }
            ]
        },
        {
            name: "Diseño UI/UX",
            description: "Crea diseños UI/UX de primera calidad con Figma o Balsamiq. Mejore la experiencia del usuario a través de un diseño bien pensado, ya sea con la fluidez de Figma o la rápida creación de prototipos de Balsamiq. Su interfaz no sólo tendrá un aspecto impresionante, sino que también dará prioridad a la satisfacción del usuario. Deje que su diseño hable de excelencia y funcionalidad.",
            tags: [
                "UI",
                "Figma",
                "UX",
                "Balsamiq"
            ],
            images: [
                "products/ui-ux/figma-kanban.jpg",
                "products/ui-ux/figma-task.jpg",
                "products/ui-ux/balsamiq-login.jpg",
                "products/ui-ux/balsamiq-incidents.jpg",
                "products/ui-ux/balsamiq-gantt.jpg"
            ],
            pricing: [
                {
                    name: "Balsamiq Básico (UX)",
                    description: "10 mockups",
                    price: "50€"
                },
                {
                    name: "Balsamiq Avanzado (UX)",
                    description: "25 mockups",
                    price: "125€"
                },
                {
                    name: "Figma Básico (UI)",
                    description: "3 páginas",
                    price: "50€"
                },
                {
                    name: "Figma Avanzado (UI)",
                    description: "10 páginas",
                    price: "125€"
                },
            ]
        }
    ]
}