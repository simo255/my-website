export type Language = 'en' | 'fr';

export type SiteProfile = {
  name: string;
  fullName: string;
  role: string;
  employer: string;
  team?: string;
  focus: string;
  location: string;
  email: string;
  phone: string;
  phoneHref: string;
  github: string;
  linkedin: string;
  tagline: string;
  about: string[];
};

export type ExperienceTrack = {
  name: string;
  start: string;
  end: string;
  current?: boolean;
  bullets: string[];
};

export type Experience = {
  employer?: string;
  role: string;
  team?: string;
  location?: string;
  start?: string;
  end?: string;
  current?: boolean;
  bullets?: string[];
  tracks?: ExperienceTrack[];
  href?: string;
  logo?: string;
};

export type Project = {
  title: string;
  blurb: string;
  tags: string[];
  href?: string;
  year: string;
  points?: string[];
};

export type Education = {
  school: string;
  degree: string;
  location: string;
  dates: string;
  current?: boolean;
  logo: string;
  summary?: string;
  courses?: string[];
  notes?: string[];
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export type UiStrings = {
  navAbout: string;
  navExperience: string;
  navWork: string;
  navWriting: string;
  navContact: string;
  roleBadge: string;
  viewProjects: string;
  getInTouch: string;
  downloadCv: string;
  currentWork: string;
  currentStudies: string;
  present: string;
  previousRole: string;
  aboutHeading: string;
  aboutExtra: string;
  experienceHeading: string;
  selectedRoles: string;
  educationHeading: string;
  coursework: string;
  toolsHeading: string;
  workHeading: string;
  otherProjectsHeading: string;
  viewProject: string;
  projectDetails: string;
  writingHeading: string;
  allNotes: string;
  emptyNotes: string;
  browseWriting: string;
  contactHeading: string;
  contactSub: string;
  backToTop: string;
  builtWith: string;
};

export type PortfolioBundle = {
  site: SiteProfile;
  experience: Experience[];
  featuredProjects: Project[];
  moreProjects: Project[];
  education: Education[];
  skillGroups: SkillGroup[];
  ui: UiStrings;
};

export const portfolioData: Record<Language, PortfolioBundle> = {
  fr: {
    site: {
      name: "Mohamed Waridi Bennouna",
      fullName: "Mohamed Waridi Bennouna",
      role: "Scrum Master Stagiaire",
      employer: "Desjardins",
      team: "FinOps / Centre d'excellence infonuagique (CCoE)",
      focus: "Gestion de projets technologiques · FinOps · Systèmes quantitatifs & IA",
      location: "Montréal, Québec, Canada",
      email: "00bmed255@gmail.com",
      phone: "+1 514-660-6470",
      phoneHref: "tel:+15146606470",
      github: "https://github.com/simo255",
      linkedin: "https://www.linkedin.com/in/mohamedwb/",
      tagline: "Scrum Master Stagiaire chez Desjardins (FinOps / Centre d'excellence infonuagique) et étudiant à la maîtrise en gestion de projets technologiques à Polytechnique Montréal.",
      about: [
        "Je suis actuellement Scrum Master Stagiaire chez Desjardins au sein de l'équipe FinOps / Centre d'excellence infonuagique (CCoE), avec un parcours rigoureux en génie logiciel couvrant le web, le backend, le cloud, le CRM et les données.",
        "Précédemment, à Environnement et Changement climatique Canada (ECCC), j'ai conçu et maintenu des solutions logicielles avec C#, Next.js, Azure, Dynamics 365, Dataverse, SQL et la plateforme Microsoft Power Platform, intervenant à la fois sur les fonctionnalités, les intégrations et les flux de données réglementaires.",
      ],
    },
    experience: [
      {
        employer: "Desjardins",
        role: "Scrum Master Stagiaire",
        team: "FinOps / Centre d'excellence infonuagique (CCoE)",
        location: "Montréal, Québec, Canada · Hybride",
        start: "Sep 2026",
        current: true,
      },
      {
        employer: "Environnement et Changement climatique Canada",
        role: "Développeur Logiciel",
        location: "Montréal, Québec, Canada · Hybride",
        start: "Juin 2024",
        end: "Août 2026",
        current: false,
        href: "https://www.canada.ca/fr/environnement-changement-climatique.html",
        logo: "assets/images/GoC.png",
        bullets: [
          "Conception et maintenance de solutions logicielles couvrant le portail, le backend, le CRM, les intégrations et les flux de données au sein des plateformes numériques et réglementaires d'ECCC.",
          "Développement et livraison de solutions avec C#, Next.js, Drupal, Azure Functions, Dynamics 365, Dataverse, Azure SQL, ADLS et Microsoft Power Platform.",
          "Développement et maintenance d'applications Power Apps pilotées par modèle et de flux automatisés Power Automate.",
          "Analyse causale et résolution d'anomalies à travers des services distribués, des intégrations et des flux de données.",
          "Collaboration étroite avec les analystes d'affaires et les équipes techniques pour traduire les besoins fonctionnels en solutions pérennes.",
          "Développement de composants JavaScript personnalisés pour enrichir l'expérience utilisateur et étendre les fonctionnalités de la plateforme.",
          "Soutien aux tests, à l'intégration continue et au déploiement des changements applicatifs sur multiples environnements.",
        ],
      },
      {
        employer: "AG-CONNECT-SOLUTIONS",
        role: "Direction des Assemblées & Opérations",
        location: "Montréal, Québec, Canada · Hybride",
        start: "Nov 2021",
        end: "Juin 2024",
        tracks: [
          {
            name: "Chef d'équipe — Assemblées",
            start: "Août 2023",
            end: "Jan 2024",
            bullets: [
              "Direction d'une équipe de co-animateurs et soutien à la coordination opérationnelle.",
              "Planification des horaires d'équipe, accompagnement à l'intégration et standardisation des pratiques.",
              "Assurance qualité et encadrement pour assurer une exécution sans faille lors des rencontres clients.",
            ],
          },
          {
            name: "Co-animateur d'assemblées générales",
            start: "Nov 2021",
            end: "Juin 2024",
            bullets: [
              "Co-animation et présentation de plus de 200 assemblées générales virtuelles et présentielles réunissant 100+ copropriétaires.",
              "Présentation des fonctionnalités de la plateforme aux participants et garantie du bon déroulement des votes.",
              "Collaboration avec des professionnels juridiques et intervenants clés pour coordonner les assemblées.",
              "Formation, intégration des nouveaux membres de l'équipe et coordination des plannings.",
            ],
          },
        ],
      },
      {
        employer: "Studio KRAFTON Montréal",
        role: "Programmeur Jouabilité — C++ (Stage)",
        location: "Montréal, Québec, Canada · Hybride",
        start: "Mai 2023",
        end: "Août 2023",
        href: "https://www.ign.com/games/the-bird-that-drinks-tears",
        logo: "assets/images/Krafton.png",
        bullets: [
          "Contribution à la conception initiale et au développement d'un projet de jeu vidéo AAA sous C++ et Unreal Engine 5.",
          "Implémentation de mécaniques de gameplay (attaques, déplacements, systèmes de santé et fonctionnalités de jeu).",
          "Conception et implémentation d'un système de détection spatiale générique basé sur des Octrees et Geometric Tools pour optimiser les performances.",
          "Évolution dans un environnement Agile avec Jira et collaboration étroite avec les concepteurs et artistes.",
          "Rédaction de documentation technique sur Confluence pour faciliter la maintenabilité et l'onboarding.",
        ],
      },
      {
        employer: "Ludia",
        role: "Programmeur Jouabilité — C++ (Stage)",
        location: "Montréal, Québec, Canada · Hybride",
        start: "Mai 2022",
        end: "Août 2022",
        href: "https://play.google.com/store/apps/details?id=com.ludia.jurassicworld",
        logo: "assets/images/ludia.png",
        bullets: [
          "Développement et optimisation de fonctionnalités gameplay et d'interfaces en C++ pour Jurassic World: The Game (plus de 20 millions d'utilisateurs).",
          "Collaboration étroite avec les artistes et les concepteurs pour intégrer de nouvelles fonctionnalités.",
          "Conception et implémentation d'interfaces dynamiques avec C++, JSON et VBA, offrant une plus grande flexibilité de configuration.",
          "Rédaction de documentation technique de conception pour soutenir la collaboration et la pérennité du code.",
        ],
      },
    ],
    featuredProjects: [
      {
        title: "Plateforme de Trading Algorithmique & Recherche Quantitative Autonome",
        year: "En cours",
        tags: ["Python", "FastAPI", "Hyperliquid", "Angular", "Quantitative Research", "Risk Management", "AI Agents"],
        blurb:
          "Plateforme de trading algorithmique 24/7 et écosystème de recherche quantitative autonome propulsé par des agents IA.",
        points: [
          "Moteur d'exécution temps réel 24/7 déployé sur VPS avec connectivité directe aux plateformes d'échange et perps (Hyperliquid, Extended) via WebSockets.",
          "Système de recherche quantitative autonome piloté par des agents IA pour la découverte systématique de stratégies, le criblage de signaux et la validation hors-échantillon (OOS).",
          "Modules de gestion des risques en production : Position Guardian, gestion dynamique du levier brut/net, stops conditionnels autonomes et coupe-circuits automatiques de drawdown.",
          "Interface web complète (Angular, bilingue FR/EN) avec visualisations d'équité en direct, terminal de trading, paper trading sandbox et tableaux de bord de risque.",
          "Architecture distribuée robuste : backend Python/FastAPI asynchrone, WebSockets temps réel, persistance hybride PostgreSQL/SQLite et chiffrement sécurisé des clés API.",
        ],
      },
      {
        title: "Scrabble — Application Web & Android multiplateforme",
        year: "2023",
        tags: ["TypeScript", "GitLab", "Angular", "Node.js", "Express", "Socket.IO", "Firebase"],
        blurb:
          "Développement d'une application de Scrabble multiplateforme au sein d'une équipe de cinq développeurs.",
        points: [
          "Conception et mise en place d'une architecture multiservices avec un backend Express.",
          "Développement de fonctionnalités de communication en temps réel avec Socket.IO.",
          "Gestion des profils utilisateurs et authentification avec Firebase.",
          "Collaboration transversale sur les couches frontend et backend tout au long du cycle de développement.",
        ],
      },
      {
        title: "Flux d'agents autonomes News-to-Instagram",
        year: "En cours",
        tags: ["Agents", "Automation", "Python"],
        blurb:
          "Agents collectant l'actualité de multiples sources, formatant le contenu et publiant des posts Instagram prêts à l'emploi sans intervention manuelle. Orchestration, robustesse et scalabilité.",
      },
    ],
    moreProjects: [
      {
        title: "betteResume",
        year: "2024",
        href: "https://github.com/simo255/betteResume",
        tags: ["Extension Chrome", "JavaScript", "LaTeX", "IA/LLM"],
        blurb:
          "Extension Chrome qui analyse une offre d'emploi, interroge Mistral ou Gemini avec votre propre clé API, et génère un CV personnalisé dans Overleaf. Clés chiffrées localement.",
      },
      {
        title: "ROMs & noyaux Android personnalisés",
        year: "2019",
        href: "https://linktr.ee/simo255",
        tags: ["C++", "Shell", "Android SDK", "XDA"],
        blurb:
          "ROMs et noyaux personnalisés pour Huawei P9 lite et Honor 5C. Optimisations de performance et personnalisations utilisées par plus de 1 000 utilisateurs sur XDA.",
      },
      {
        title: "Sports AI: Visualisation de données CAN",
        year: "2024",
        tags: ["Python", "Pandas", "Plotly", "FastAPI", "AWS"],
        blurb:
          "Application web visualisant les statistiques de football grâce à des tableaux de bord interactifs et des analyses de données.",
      },
    ],
    education: [
      {
        school: "Polytechnique Montréal",
        degree: "Maîtrise en génie industriel — Gestion de projets technologiques",
        location: "Montréal, Québec, Canada",
        dates: "Août 2025 — Présent",
        current: true,
        logo: "assets/images/polymtl.png",
        summary:
          "Spécialisation en gouvernance de projets technologiques, ingénierie des systèmes, planification et suivi de projets, gestion des risques et leadership technologique.",
        courses: [
          "IND6130 — Processus et configuration des projets technologiques",
          "IND6131 — Financement et budgets de projets technologiques",
          "IND6115C — Gestion de l'ingénierie des systèmes",
          "IND6132A — Planification et suivi de projets technologiques",
          "IND6139 — Gestion et contrôle des grands projets",
          "IND8119 — Gestion d'équipe en environnement technologique",
          "LOG8371 — Ingénierie de la qualité logicielle",
          "IND8137A — Entrepreneuriat technologique",
          "IND8108 — Créativité en sciences et ingénierie",
          "IND8120 — Commercialisation de nouveaux produits et services",
        ],
      },
      {
        school: "Polytechnique Montréal",
        degree: "Baccalauréat en ingénierie, Génie logiciel",
        location: "Montréal, Québec, Canada",
        dates: "2020 — 2024",
        current: false,
        logo: "assets/images/polymtl.png",
        summary:
          "Développement logiciel, programmation orientée objet, architecture logicielle et pratiques d'ingénierie.",
      },
    ],
    skillGroups: [
      {
        label: "Langages",
        items: [
          "JavaScript",
          "TypeScript",
          "Python",
          "C#",
          "C++",
          "Java",
          "SQL",
          "HTML/CSS",
          "Liquid",
        ],
      },
      {
        label: "Cadres & plateformes",
        items: [
          "Drupal",
          "Next.js",
          "React",
          "Angular",
          "FastAPI",
          "Node.js",
          "Azure Functions",
          "Microsoft Power Platform",
        ],
      },
      {
        label: "Données & Cloud",
        items: [
          "FinOps",
          "Dataverse",
          "Dynamics 365",
          "Azure SQL",
          "ADLS",
          "Databricks",
          "AWS",
          "Docker",
        ],
      },
      {
        label: "IA & automatisation",
        items: [
          "Intégration LLM",
          "Flux d'agents autonomes",
          "Prompt engineering",
          "GitHub Copilot",
          "Codex",
        ],
      },
      {
        label: "Outils & Méthodologies",
        items: [
          "Agile / Scrum",
          "Azure DevOps",
          "Jira",
          "Confluence",
          "Git",
          "GitHub",
          "GitLab",
          "Fortify",
          "Figma",
        ],
      },
    ],
    ui: {
      navAbout: "À propos",
      navExperience: "Expérience",
      navWork: "Projets",
      navWriting: "Articles",
      navContact: "Contact",
      roleBadge: "Montréal, Canada",
      viewProjects: "Voir les projets",
      getInTouch: "Me contacter",
      downloadCv: "Télécharger mon CV (PDF)",
      currentWork: "Emploi",
      currentStudies: "Études",
      present: "Présent",
      previousRole: "Poste précédent",
      aboutHeading: "À propos",
      aboutExtra: "Je poursuis également une maîtrise en gestion de projets technologiques à Polytechnique Montréal, tout en explorant l'IA, l'automatisation et la recherche quantitative à travers mes propres projets.",
      experienceHeading: "Expérience",
      selectedRoles: "Postes clés",
      educationHeading: "Formation",
      coursework: "Cours suivis",
      toolsHeading: "Outils & technologies",
      workHeading: "Projets sélectionnés",
      otherProjectsHeading: "Autres projets",
      viewProject: "Voir le projet",
      projectDetails: "Détails du projet",
      writingHeading: "Articles & Réflexions",
      allNotes: "Tous les articles",
      emptyNotes: "Réflexions sur la tech, la finance et les idées qui me stimulent.",
      browseWriting: "Consulter les articles",
      contactHeading: "Entrons en contact.",
      contactSub: "Pour un projet, une opportunité ou un échange constructif.",
      backToTop: "Haut de page",
      builtWith: "Créé avec curiosité. Basé à Montréal.",
    },
  },
  en: {
    site: {
      name: "Mohamed Waridi Bennouna",
      fullName: "Mohamed Waridi Bennouna",
      role: "Scrum Master Intern",
      employer: "Desjardins",
      team: "FinOps / Cloud Centre of Excellence (CCoE)",
      focus: "Technical Project Management · FinOps · AI & Quantitative Systems",
      location: "Montréal, Québec, Canada",
      email: "00bmed255@gmail.com",
      phone: "+1 514-660-6470",
      phoneHref: "tel:+15146606470",
      github: "https://github.com/simo255",
      linkedin: "https://www.linkedin.com/in/mohamedwb/",
      tagline: "Scrum Master Intern at Desjardins (FinOps / Cloud Centre of Excellence) and Master's student in Technology Project Management at Polytechnique Montréal.",
      about: [
        "I’m currently a Scrum Master Intern at Desjardins in the FinOps / Cloud Centre of Excellence (CCoE) team, with a strong software engineering foundation across web, backend, cloud, CRM, and data platforms.",
        "Previously, at Environment and Climate Change Canada (ECCC), I developed and maintained applications using C#, Next.js, Azure, Dynamics 365, Dataverse, SQL, and Microsoft Power Platform, delivering across features, integrations, and regulatory data flows.",
      ],
    },
    experience: [
      {
        employer: "Desjardins",
        role: "Scrum Master Intern",
        team: "FinOps / Cloud Centre of Excellence (CCoE)",
        location: "Montréal, Québec, Canada · Hybrid",
        start: "Sep 2026",
        current: true,
      },
      {
        employer: "Environnement et Changement climatique Canada",
        role: "Software Developer",
        location: "Montréal, Québec, Canada · Hybride",
        start: "Jun 2024",
        end: "Aug 2026",
        current: false,
        href: "https://www.canada.ca/en/environment-climate-change.html",
        logo: "assets/images/GoC.png",
        bullets: [
          "Developed and maintained software solutions across portal, backend, CRM, integration, and data layers across ECCC's digital and regulatory platforms.",
          "Built and delivered solutions using C#, Next.js, Drupal, Azure Functions, Dynamics 365, Dataverse, Azure SQL, ADLS, and Microsoft Power Platform.",
          "Developed and maintained model-driven Power Apps and Power Automate workflows.",
          "Investigated and resolved defects across distributed services, integrations, and data flows, from root-cause analysis through testing and delivery.",
          "Collaborated with business analysts and technical teams to translate business requirements into reliable and maintainable software solutions.",
          "Developed custom JavaScript components to extend platform functionality and improve user experience.",
          "Supported the testing, integration, and delivery of application changes across multiple services and environments.",
        ],
      },
      {
        employer: "AG-CONNECT-SOLUTIONS",
        role: "Assemblies Leadership & Operations",
        location: "Montréal, Québec, Canada · Hybride",
        start: "Nov 2021",
        end: "Jun 2024",
        tracks: [
          {
            name: "Team Lead - Assemblies",
            start: "Aug 2023",
            end: "Jan 2024",
            bullets: [
              "Led a team of meeting Co-hosts and supported coordination and operations.",
              "Planned team schedules, supported onboarding, and helped standardize operational practices.",
              "Provided guidance and quality oversight to ensure consistent delivery across client meetings.",
            ],
          },
          {
            name: "General assemblies Co-host",
            start: "Nov 2021",
            end: "Jun 2024",
            bullets: [
              "Co-hosted and presented more than 200 virtual and in-person general assemblies involving 100+ condominium owners.",
              "Presented and explained platform functionality to participants while ensuring smooth execution of meetings and voting processes.",
              "Collaborated with legal professionals and other stakeholders to coordinate assemblies and improve voting processes.",
              "Trained and onboarded new team members and coordinated schedules.",
            ],
          },
        ],
      },
      {
        employer: "Studio KRAFTON Montréal",
        role: "Gameplay Programmer — C++ (Internship)",
        location: "Montréal, Québec, Canada · Hybride",
        start: "May 2023",
        end: "Aug 2023",
        href: "https://www.ign.com/games/the-bird-that-drinks-tears",
        logo: "assets/images/Krafton.png",
        bullets: [
          "Contributed to the initial conception and development of an AAA game project using C++ and Unreal Engine 5.",
          "Implemented gameplay mechanics including player attacks, movement, health systems, and gameplay-related functionality.",
          "Designed and implemented a generic spatial detection system using Octree-based approaches and Geometric Tools to improve performance.",
          "Worked in an Agile development environment using Jira and collaborated with designers and artists to integrate gameplay features.",
          "Created technical documentation in Confluence to support maintainability and developer onboarding.",
        ],
      },
      {
        employer: "Ludia",
        role: "Gameplay Programmer — C++ (Internship)",
        location: "Montréal, Québec, Canada · Hybride",
        start: "May 2022",
        end: "Aug 2022",
        href: "https://play.google.com/store/apps/details?id=com.ludia.jurassicworld",
        logo: "assets/images/ludia.png",
        bullets: [
          "Developed and optimized gameplay and UI functionality in C++ for Jurassic World: The Game, a mobile game of more than 20 million users.",
          "Collaborated closely with artists and game designers to integrate new gameplay and UI features.",
          "Designed and implemented dynamic UI functionality using C++, JSON, and VBA, giving designers greater flexibility to configure interface elements.",
          "Created technical design documentation for implemented features to support collaboration and maintainability.",
        ],
      },
    ],
    featuredProjects: [
      {
        title: "Algorithmic Trading & Autonomous Quantitative Platform",
        year: "Ongoing",
        tags: ["Python", "FastAPI", "Hyperliquid", "Angular", "Quantitative Research", "Risk Management", "AI Agents"],
        blurb:
          "24/7 automated algorithmic trading platform and autonomous quantitative research ecosystem driven by AI agents.",
        points: [
          "Engineered a 24/7 real-time execution engine deployed on VPS with native venue connectivity (Hyperliquid, Extended) via low-latency WebSockets.",
          "Built an autonomous quantitative research system using agentic AI loops for systematic strategy discovery, signal screening, and out-of-sample (OOS) validation.",
          "Implemented enterprise-grade risk management: Position Guardian, gross/net leverage controls, autonomous conditional stops, and automated drawdown circuit breakers.",
          "Delivered a full-stack web terminal (Angular, bilingual FR/EN) with real-time equity sparklines, paper trading sandbox, risk heatmaps, and secure client-side API key management.",
          "Architected resilient multi-tenant services with asynchronous Python/FastAPI, WebSocket pipelines, hybrid PostgreSQL/SQLite persistence, and Fernet encryption.",
        ],
      },
      {
        title: "Scrabble — Cross-Platform Web & Android Application",
        year: "2023",
        tags: ["TypeScript", "GitLab", "Angular", "Node.js", "Express", "Socket.IO", "Firebase"],
        blurb:
          "Developed a cross-platform Scrabble application as part of a five-person development team.",
        points: [
          "Designed and implemented a multi-service architecture with an Express backend.",
          "Built real-time communication features using Socket.IO.",
          "Implemented user profiles and authentication-related functionality using Firebase.",
          "Collaborated across frontend and backend components throughout the development lifecycle.",
        ],
      },
      {
        title: "News-to-Instagram agent workflow",
        year: "Ongoing",
        tags: ["Agents", "Automation", "Python"],
        blurb:
          "Agents that collect news from multiple sources, process and format content, and publish Instagram-ready posts without manual intervention. Orchestration, reliability, and scalable delivery.",
      },
    ],
    moreProjects: [
      {
        title: "betteResume",
        year: "2024",
        href: "https://github.com/simo255/betteResume",
        tags: ["Chrome extension", "JavaScript", "LaTeX", "AI/LLM"],
        blurb:
          "Chrome extension that reads a job post, calls Mistral or Gemini with your own key, and opens a tailored resume in Overleaf. Keys encrypted locally.",
      },
      {
        title: "Custom Android ROMs & kernels",
        year: "2019",
        href: "https://linktr.ee/simo255",
        tags: ["C++", "Shell", "Android SDK", "XDA"],
        blurb:
          "Custom ROMs and kernels for Huawei P9 lite and Honor 5C. Performance and customization work used by 1,000+ users on XDA.",
      },
      {
        title: "Sports AI: AFCON data visualization",
        year: "2024",
        tags: ["Python", "Pandas", "Plotly", "FastAPI", "AWS"],
        blurb:
          "Web application to visualize football statistics using interactive dashboards and data-driven insights.",
      },
    ],
    education: [
      {
        school: "Polytechnique Montréal",
        degree:
          "Master's degree, Industrial Engineering — Technology Project Management",
        location: "Montréal, Québec, Canada",
        dates: "Aug 2025 — Present",
        current: true,
        logo: "assets/images/polymtl.png",
        summary:
          "Specialized in technology project governance, systems engineering, project planning & scheduling, risk management, and tech leadership.",
        courses: [
          "IND6130 — Technology Project Processes & Configuration",
          "IND6131 — Technology Project Financing & Budgeting",
          "IND6115C — Systems Engineering Management",
          "IND6132A — Technology Project Planning & Monitoring",
          "IND6139 — Large-Scale Project Management & Control",
          "IND8119 — Team Management in Technology Environments",
          "LOG8371 — Software Quality Engineering",
          "IND8137A — Technology Entrepreneurship",
          "IND8108 — Creativity in Science & Engineering",
          "IND8120 — New Product & Service Commercialization",
        ],
      },
      {
        school: "Polytechnique Montréal",
        degree: "Bachelor of Engineering, Software Engineering",
        location: "Montréal, Québec, Canada",
        dates: "2020 — 2024",
        current: false,
        logo: "assets/images/polymtl.png",
        summary:
          "Software development, object-oriented programming, software architecture, and engineering practices.",
      },
    ],
    skillGroups: [
      {
        label: "Languages",
        items: [
          "JavaScript",
          "TypeScript",
          "Python",
          "C#",
          "C++",
          "Java",
          "SQL",
          "HTML/CSS",
          "Liquid",
        ],
      },
      {
        label: "Frameworks / platforms",
        items: [
          "Drupal",
          "Next.js",
          "React",
          "Angular",
          "FastAPI",
          "Node.js",
          "Azure Functions",
          "Microsoft Power Platform",
        ],
      },
      {
        label: "Data / cloud",
        items: [
          "FinOps",
          "Dataverse",
          "Dynamics 365",
          "Azure SQL",
          "ADLS",
          "Databricks",
          "AWS",
          "Docker",
        ],
      },
      {
        label: "AI / automation",
        items: [
          "LLM integration",
          "Agent workflows",
          "Prompt engineering",
          "GitHub Copilot",
          "Codex",
        ],
      },
      {
        label: "Tools & Methods",
        items: [
          "Agile / Scrum",
          "Azure DevOps",
          "Jira",
          "Confluence",
          "Git",
          "GitHub",
          "GitLab",
          "Fortify",
          "Figma",
        ],
      },
    ],
    ui: {
      navAbout: "About",
      navExperience: "Experience",
      navWork: "Work",
      navWriting: "Writing",
      navContact: "Contact",
      roleBadge: "Montréal, Canada",
      viewProjects: "View projects",
      getInTouch: "Get in touch",
      downloadCv: "Download Resume (PDF)",
      currentWork: "Work",
      currentStudies: "Studies",
      present: "Present",
      previousRole: "Previous role",
      aboutHeading: "About",
      aboutExtra: "I’m also pursuing a master’s in Technology Project Management at Polytechnique Montréal, and exploring AI, automation, and quantitative research through my own projects.",
      experienceHeading: "Experience",
      selectedRoles: "Selected roles",
      educationHeading: "Education",
      coursework: "Coursework",
      toolsHeading: "Tools & technologies",
      workHeading: "Selected projects",
      otherProjectsHeading: "Other projects",
      viewProject: "View project",
      projectDetails: "Project details",
      writingHeading: "Writing",
      allNotes: "All notes",
      emptyNotes: "Notes on technology, finance, and the things that make me think.",
      browseWriting: "Browse writing",
      contactHeading: "Get in touch.",
      contactSub: "For a project, a question, or a conversation.",
      backToTop: "Back to top",
      builtWith: "Built with curiosity. Based in Montréal.",
    },
  },
};

export function getPortfolioData(lang: Language): PortfolioBundle {
  return portfolioData[lang] ?? portfolioData.fr;
}

// Fallback exports for backward compatibility
export const site = portfolioData.fr.site;
export const experience = portfolioData.fr.experience;
export const featuredProjects = portfolioData.fr.featuredProjects;
export const moreProjects = portfolioData.fr.moreProjects;
export const education = portfolioData.fr.education;
export const skillGroups = portfolioData.fr.skillGroups;
