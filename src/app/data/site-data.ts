export const site = {
  name: "Mohamed Bennouna",
  fullName: "Mohamed Waridi Bennouna",
  role: "Software Developer",
  focus: "Technical Project Management · AI & Quantitative Systems",
  location: "Montréal, Québec, Canada",
  email: "00bmed255@gmail.com",
  phone: "+1 514-660-6470",
  phoneHref: "tel:+15146606470",
  github: "https://github.com/simo255",
  linkedin: "https://www.linkedin.com/in/mohamedwb/",
  tagline:
    "Software Developer at Environment and Climate Change Canada (ECCC) and Master's student in Technology Project Management at Polytechnique Montréal.",
  about: [
    "Software Developer with experience building and supporting scalable applications across web, backend, cloud, CRM, and data environments.",
    "At Environment and Climate Change Canada (ECCC), I develop and maintain applications using technologies such as C#, Next.js, Azure, Dynamics 365, Dataverse, SQL, and Microsoft Power Platform. I work across features, integrations, and data layers within ECCC's digital and regulatory platforms.",
  ],
} as const;

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
  location: string;
  start: string;
  end: string;
  current?: boolean;
  bullets?: string[];
  tracks?: ExperienceTrack[];
  href?: string;
  logo?: string;
};

export const experience: Experience[] = [
  {
    employer: "Environnement et Changement climatique Canada",
    role: "Software Developer",
    location: "Montréal, Québec, Canada · Hybride",
    start: "Jun 2024",
    end: "Present",
    current: true,
    href: "https://www.canada.ca/en/environment-climate-change.html",
    logo: "assets/images/GoC.png",
    bullets: [
      "Develop and maintain software solutions across portal, backend, CRM, integration, and data layers across ECCC's digital and regulatory platforms.",
      "Build and deliver solutions using C#, Next.js, Drupal, Azure Functions, Dynamics 365, Dataverse, Azure SQL, ADLS, and Microsoft Power Platform.",
      "Develop and maintain model-driven Power Apps and Power Automate workflows.",
      "Investigate and resolve defects across distributed services, integrations, and data flows, from root-cause analysis through testing and delivery.",
      "Collaborate with business analysts and technical teams to translate business requirements into reliable and maintainable software solutions.",
      "Develop custom JavaScript components to extend platform functionality and improve user experience.",
      "Support the testing, integration, and delivery of application changes across multiple services and environments.",
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
];

export type Project = {
  title: string;
  blurb: string;
  tags: string[];
  href?: string;
  year: string;
  points?: string[];
};

export const featuredProjects: Project[] = [
  {
    title: "Algorithmic Trading & Quantitative Research Platform",
    year: "Ongoing",
    tags: ["Python", "Hyperliquid", "Backtesting", "Risk", "Finance", "Algorithms"],
    blurb:
      "Building a systematic trading research platform focused on quantitative strategy development, backtesting, and evaluation.",
    points: [
      "Develop and evaluate algorithmic trading strategies using historical market data.",
      "Build research workflows for testing strategy ideas across multiple assets and market regimes.",
      "Design reusable backtesting and strategy components to support rapid quantitative experimentation.",
      "Explore systematic approaches to momentum, market behavior, portfolio construction, and risk management.",
      "Continuously refine strategies through out-of-sample testing, robustness analysis, and iterative research.",
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
];

export const moreProjects: Project[] = [
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
];

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

export const education: Education[] = [
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
];

export const skillGroups = [
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
      "Azure DevOps",
      "Git",
      "GitHub",
      "GitLab",
      "Jira",
      "Confluence",
      "Fortify",
      "Figma",
      "Agile",
    ],
  },
] as const;
