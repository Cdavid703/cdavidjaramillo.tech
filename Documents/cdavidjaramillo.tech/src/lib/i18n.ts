export type Lang = 'es' | 'en' | 'fr'

// Use [b]text[/b] to mark bold/white inline spans
export const translations = {
  es: {
    nav: { about: 'Sobre mí', projects: 'Proyectos', stack: 'Stack', contact: 'Contacto', hire: 'Contrátame' },
    hero: {
      badge: 'Disponible para freelance y consultoría',
      roles: ['Ingeniero Industrial', 'Desarrollador Full Stack', 'Experto en Automatización', 'Optimizador de Procesos'],
      tagline: 'Me sitúo en la intersección de [b]las finanzas, las operaciones y el software[/b]. No solo analizo procesos rotos — construyo las herramientas que los corrigen.',
      cta1: 'Ver Proyectos', cta2: 'Contactar',
      stat1: 'Años exp.', stat2: 'Trabajo automatizado', stat3: 'Apps en prod.',
      scroll: 'Scroll',
    },
    about: {
      tag: 'Sobre mí', title: 'Dos mundos que', titleAccent: 'raramente se encuentran',
      p1: '[b]Ingeniero Industrial[/b] con 15+ años dentro de la empresa — logística, cadena de suministro y control financiero en compañías como [b]Holcim/Amrize[/b]. En algún momento dejé de esperar que TI construyera lo que el negocio necesitaba y empecé a construirlo yo mismo.',
      p2: 'Del lado empresarial diseño y codifico [b]integraciones SAP en C# y Python[/b], pipelines de reconciliación financiera, dashboards [b]Power BI[/b] y automatización VBA que elimina cientos de horas manuales al mes. Trabajo con CFOs, controladores y directores — hablo su idioma y entrego en código.',
      p3: 'Del lado del producto construyo apps full-stack en solitario: [b]React, Next.js, Firebase, TypeScript[/b] — una PWA de domicilios en vivo en Medellín, una plataforma de idiomas y un sitio corporativo para una organización de 100+ miembros. No son prototipos. Usuarios reales, datos reales, uptime real.',
      cards: [
        { title: 'Automatización Empresarial', desc: 'Pipelines Python, C# y VBA integrados con SAP, reduciendo trabajo manual hasta un 90%.' },
        { title: 'Sistemas Financieros',       desc: 'Automatización de reconciliación end-to-end con 100% calidad de datos. Hablo el idioma del CFO.' },
        { title: 'Apps Full Stack',            desc: 'PWAs y sitios corporativos en producción con React, Next.js, Firebase y TypeScript.' },
        { title: 'Business Intelligence',      desc: 'Dashboards Power BI y modelos SQL que convierten datos crudos en decisiones reales.' },
      ],
    },
    projects: {
      tag: 'Trabajo', title: 'Proyectos en', titleAccent: 'producción',
      subtitle: 'No proyectos acumulando polvo — apps reales usadas por personas reales.',
      live: 'Sitio en vivo ↗', github: 'GitHub ↗',
      descs: [
        'PWA full-stack en vivo para un negocio de comida en Medellín. Gestión de pedidos, tracking GPS de domiciliarios en tiempo real, panel de cajeros y flujo de pedidos.',
        'Sitio oficial para una organización musical de 100+ miembros fundada en 1983. Vitrina de servicios, sección de eventos, portal de miembros y flujos de contacto.',
        'Plataforma educativa interactiva para aprender inglés y francés con lecciones estructuradas, ejercicios de vocabulario y contenido multimedia.',
      ],
      badges: ['En vivo en producción', 'Proyecto de cliente', 'En vivo y público'],
    },
    stack: {
      tag: 'Herramientas', title: 'Stack', titleAccent: 'Tecnológico',
      cats: ['Web & Frontend', 'Backend & Automatización', 'Datos & Empresa'],
    },
    resume: {
      tag: 'Currículum', title: 'Descarga mi', titleAccent: 'Hoja de Vida',
      subtitle: 'Selecciona el idioma del CV que deseas descargar.',
      available: 'Disponible', soon: 'Próximamente',
      btn: 'Descargar',
    },
    contact: {
      tag: 'Contacto', title: '¿Trabajamos', titleAccent: 'juntos?',
      subtitle: '¿Buscas a alguien que entienda el problema de negocio y sepa construir la solución? Hablemos.',
      emailBtn: 'Envíame un email ↗',
    },
    footer: { built: 'Construido con Next.js y Tailwind CSS.' },
  },

  en: {
    nav: { about: 'About', projects: 'Projects', stack: 'Stack', contact: 'Contact', hire: 'Hire me' },
    hero: {
      badge: 'Available for freelance & consulting',
      roles: ['Industrial Engineer', 'Full Stack Developer', 'Financial Automation Expert', 'Process Optimizer'],
      tagline: 'I sit at the intersection of [b]finance, operations, and software[/b]. I don\'t just analyze broken processes — I build the tools that fix them.',
      cta1: 'View Projects', cta2: 'Get in touch',
      stat1: 'Years exp.', stat2: 'Work automated', stat3: 'Apps in prod.',
      scroll: 'Scroll',
    },
    about: {
      tag: 'About me', title: 'Two worlds that', titleAccent: 'rarely meet',
      p1: '[b]Industrial Engineer[/b] with 15+ years inside the enterprise — logistics, supply chain, and financial control at companies like [b]Holcim/Amrize[/b]. At some point I stopped waiting for IT to build what the business needed and started building it myself.',
      p2: 'On the enterprise side I design and code [b]SAP integrations in C# and Python[/b], financial reconciliation pipelines, [b]Power BI[/b] dashboards, and VBA automation that eliminates hundreds of manual hours per month. I work directly with CFOs, controllers, and ops directors — I speak their language and deliver in code.',
      p3: 'On the product side I build and ship full-stack apps solo: [b]React, Next.js, Firebase, TypeScript[/b] — a real-time delivery PWA live in Medellín, a language learning platform, and a corporate site for a 100+ member organization. Not prototypes. Real users, real data, real uptime.',
      cards: [
        { title: 'Enterprise Automation', desc: 'Python, C# & VBA pipelines integrated with SAP cutting manual work up to 90%.' },
        { title: 'Financial Systems',     desc: 'End-to-end reconciliation automation with 100% data quality. I speak the CFO language.' },
        { title: 'Full Stack Apps',       desc: 'Production PWAs and corporate sites with React, Next.js, Firebase and TypeScript.' },
        { title: 'Business Intelligence', desc: 'Power BI dashboards and SQL models that turn raw data into real decisions.' },
      ],
    },
    projects: {
      tag: 'Work', title: 'Projects in', titleAccent: 'production',
      subtitle: 'Not side projects collecting dust — real apps used by real people.',
      live: 'Live site ↗', github: 'GitHub ↗',
      descs: [
        'Full-stack PWA running live for a food business in Medellín. Handles order management, real-time GPS driver tracking, cashier dashboard, client-facing order flow, and in-app chat.',
        'Official site for a 100+ member musical organization founded in 1983. Features service showcase, event section, member portal and contact flows.',
        'Interactive educational platform for learning English and French with structured lessons, vocabulary exercises and multimedia content.',
      ],
      badges: ['Live in production', 'Client project', 'Live & public'],
    },
    stack: {
      tag: 'Tools', title: 'Tech', titleAccent: 'Stack',
      cats: ['Web & Frontend', 'Backend & Automation', 'Data & Enterprise'],
    },
    resume: {
      tag: 'Résumé', title: 'Download my', titleAccent: 'Resume',
      subtitle: 'Select the language of the CV you want to download.',
      available: 'Available', soon: 'Coming soon',
      btn: 'Download',
    },
    contact: {
      tag: 'Contact', title: "Let's work", titleAccent: 'together',
      subtitle: "Looking for someone who understands both the business problem and how to build the solution? Let's talk.",
      emailBtn: 'Send me an email ↗',
    },
    footer: { built: 'Built with Next.js & Tailwind CSS.' },
  },

  fr: {
    nav: { about: 'À propos', projects: 'Projets', stack: 'Stack', contact: 'Contact', hire: 'Me recruter' },
    hero: {
      badge: 'Disponible pour freelance et consulting',
      roles: ['Ingénieur Industriel', 'Développeur Full Stack', 'Expert en Automatisation', 'Optimiseur de Processus'],
      tagline: 'Je me situe à l\'intersection de [b]la finance, des opérations et du logiciel[/b]. Je n\'analyse pas seulement les processus défaillants — je construis les outils qui les corrigent.',
      cta1: 'Voir les projets', cta2: 'Me contacter',
      stat1: 'Ans d\'exp.', stat2: 'Travail automatisé', stat3: 'Apps en prod.',
      scroll: 'Défiler',
    },
    about: {
      tag: 'À propos', title: 'Deux mondes qui', titleAccent: 'se rencontrent rarement',
      p1: '[b]Ingénieur Industriel[/b] avec plus de 15 ans au cœur de l\'entreprise — logistique, chaîne d\'approvisionnement et contrôle financier chez des sociétés comme [b]Holcim/Amrize[/b]. À un moment j\'ai arrêté d\'attendre que l\'IT construise ce dont le business avait besoin, et j\'ai commencé à le construire moi-même.',
      p2: 'Côté entreprise, je conçois et code des [b]intégrations SAP en C# et Python[/b], des pipelines de réconciliation financière, des tableaux de bord [b]Power BI[/b] et de l\'automatisation VBA qui élimine des centaines d\'heures manuelles par mois. Je travaille avec des DAF, contrôleurs et directeurs — je parle leur langage et livre en code.',
      p3: 'Côté produit, je construis et déploie des applications full-stack en solo : [b]React, Next.js, Firebase, TypeScript[/b] — une PWA de livraison en temps réel active à Medellín, une plateforme d\'apprentissage des langues et un site corporate pour une organisation de 100+ membres. Pas des prototypes. Vrais utilisateurs, vraies données, vrai uptime.',
      cards: [
        { title: 'Automatisation Entreprise', desc: 'Pipelines Python, C# et VBA intégrés à SAP réduisant le travail manuel jusqu\'à 90%.' },
        { title: 'Systèmes Financiers',       desc: 'Automatisation de réconciliation end-to-end avec 100% de qualité des données. Je parle le langage du DAF.' },
        { title: 'Apps Full Stack',           desc: 'PWAs et sites corporate en production avec React, Next.js, Firebase et TypeScript.' },
        { title: 'Business Intelligence',     desc: 'Tableaux de bord Power BI et modèles SQL qui transforment les données brutes en décisions réelles.' },
      ],
    },
    projects: {
      tag: 'Travaux', title: 'Projets en', titleAccent: 'production',
      subtitle: 'Pas des projets qui ramassent la poussière — de vraies apps utilisées par de vraies personnes.',
      live: 'Site en direct ↗', github: 'GitHub ↗',
      descs: [
        'PWA full-stack en production pour une entreprise de restauration à Medellín. Gestion des commandes, suivi GPS des livreurs en temps réel, tableau de bord caissier et flux de commandes.',
        'Site officiel pour une organisation musicale de 100+ membres fondée en 1983. Vitrine de services, section événements, portail membres et flux de contact.',
        'Plateforme éducative interactive pour apprendre l\'anglais et l\'espagnol avec des leçons structurées, des exercices de vocabulaire et du contenu multimédia.',
      ],
      badges: ['En production', 'Projet client', 'En direct et public'],
    },
    stack: {
      tag: 'Outils', title: 'Stack', titleAccent: 'Technologique',
      cats: ['Web & Frontend', 'Backend & Automatisation', 'Données & Entreprise'],
    },
    resume: {
      tag: 'CV', title: 'Télécharger mon', titleAccent: 'CV',
      subtitle: 'Sélectionnez la langue du CV que vous souhaitez télécharger.',
      available: 'Disponible', soon: 'Bientôt',
      btn: 'Télécharger',
    },
    contact: {
      tag: 'Contact', title: 'Travaillons', titleAccent: 'ensemble',
      subtitle: 'Vous cherchez quelqu\'un qui comprend le problème métier et sait construire la solution ? Parlons-en.',
      emailBtn: 'Envoyez-moi un email ↗',
    },
    footer: { built: 'Construit avec Next.js et Tailwind CSS.' },
  },
} as const

export type T = (typeof translations)[Lang]
