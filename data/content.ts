export const profile = {
  name: "Vladyslav",
  surname: "Shevchenko",
  title: "Senior Software Engineer",
  tagline: "Fullstack Engineer // .NET + React // 7+ Years",
  bio: "I build and ship full-stack systems across the entire product — .NET backends, React frontends, AI integrations, and DevOps pipelines. Over 7 years I've delivered in private equity analytics, military tech, UK e-commerce, and enterprise ERP. I own things end to end, rewrite legacy systems that matter, mentor teams toward fullstack, and move fast without cutting corners.",
  email: "v.v.shevchenko1997@gmail.com",
  location: "Ukraine, Kyiv",
  availableForHire: true,
};

export const keywords = [
  { label: ".NET / C#",     highlight: true  },
  { label: "React",         highlight: true  },
  { label: "Azure",         highlight: false },
  { label: "Microservices", highlight: false },
  { label: "Docker / K8s",  highlight: false },
  { label: "TypeScript",    highlight: false },
];

export const skills = [
  "C# / .NET", "ASP.NET Core", "EF Core", "Blazor",
  "React", "TypeScript", "Redux / MobX", "Node.js", "Next.js", "SignalR",
  "MassTransit", "RabbitMQ",
  "Azure AI Foundry", "Azure OpenAI", "Azure Search", "Azure DevOps", "Azure Functions",
  "Docker", "Kubernetes", "Rancher", "Octopus",
  "MSSQL", "PostgreSQL", "MongoDB", "Oracle", "Redis", "Elasticsearch",
  "Auth0 / OAuth2", "xUnit / Moq", "Storybook",
];

export const experience = [
  {
    role: "Senior Software Engineer",
    company: "Cepres",
    companyUrl: "https://cepres.com",
    companyAbout: "World's leading private markets data & analytics platform — trusted by top-tier PE firms for deal benchmarking, portfolio analytics, and AI-driven investment intelligence.",
    industry: "Private Equity",
    location: "Ukraine (Remote)",
    period: "08/2024 — Present",
    current: true,
    bullets: [
      "DealEdge — delivered across the full product: AI semantic search (Azure OpenAI + Azure AI Search) over industries, geographies, charts and reports; interactive data visualisations; import/export pipelines; and various analytical modules for global PE teams.",
      "Predictive Intelligence — led rewrite of the portfolio analysis module (PE metrics calculation) from C++ and Python to .NET; implemented Secondaries as a new asset type; improved performance, testability, and maintainability throughout.",
      "Built and maintained CI/CD pipelines across projects, improving deployment reliability and release cadence.",
      "Mentored frontend and backend engineers toward fullstack proficiency; owned regular knowledge-sharing sessions across the team.",
    ],
    stack: [".NET", "Azure OpenAI", "Azure AI Search", "Azure AI Foundry", "Azure DevOps", "C++", "Python", "Monte Carlo", "CI/CD"],
  },
  {
    role: "Software Engineer",
    company: "NDA — Military Tech",
    companyUrl: "",
    companyAbout: "Classified defense-sector project. Details available on request under NDA.",
    industry: "Defense / Military",
    location: "Ukraine",
    period: "06/2023 — 11/2023",
    current: false,
    bullets: [
      "Delivered the entire React frontend from scratch for a critical defense platform within a tight timeline.",
      "Collaborated closely on UI/UX design, translating Figma specs into production-ready components.",
      "Contributed to backend services in a distributed microservice architecture with Kafka event streaming.",
      "Conducted code reviews and mentored junior engineers, improving team output quality.",
    ],
    stack: ["TypeScript", "React", "Redux", "MUI", ".NET", "MassTransit", "Kafka", "Kubernetes", "Docker", "PostgreSQL", "Figma"],
  },
  {
    role: "Fullstack Engineer",
    company: "Listock (formerly Inventorix)",
    companyUrl: "https://listock.biz",
    companyAbout: "Multi-channel e-commerce & inventory management CRM serving marketing, sales, and retail businesses across the UK.",
    industry: "E-commerce / CRM",
    location: "Ukraine → UK (Remote)",
    period: "06/2020 — 06/2023",
    current: false,
    bullets: [
      "Delivered end-to-end Etsy and Shopify marketplace integrations via RESTful API and OAuth2, expanding platform reach to thousands of UK retail users.",
      "Led a full UI rebuild in React, modernising the interface while preserving all existing functionality — zero regression.",
      "Rebuilt the admin portal using Blazor, improving internal team productivity.",
      "Improved application performance through query optimisation, Redis caching, and Elasticsearch-powered search.",
      "Introduced xUnit test coverage and Storybook component documentation, reducing regression bugs.",
      "Managed TeamCity deployment pipelines and Docker containerisation.",
    ],
    stack: [".NET", "EF Core", "React", "Redux", "Blazor", "Redis", "MSSQL", "MongoDB", "Elasticsearch", "Docker", "OAuth2", "xUnit", "Storybook"],
  },
  {
    role: "Software Engineer",
    company: "ISPro",
    companyUrl: "https://ispro.ua",
    companyAbout: "Ukrainian enterprise software company delivering ERP solutions for finance, HR, and supply chain management to public sector and large organisations.",
    industry: "Enterprise ERP",
    location: "Kyiv, UA",
    period: "10/2018 — 06/2020",
    current: false,
    bullets: [
      "Maintained and performance-optimised a large-scale C++ desktop ERP used by finance and HR departments across multiple enterprises.",
      "Drove migration from legacy desktop to a modern web application, owning both frontend and backend layers.",
      "Extended database support to PostgreSQL alongside existing MSSQL and Oracle — enabling new client deployments.",
      "Authored rapid-fix SQL scripts for production incidents, minimising downtime for enterprise customers.",
    ],
    stack: ["C++", "C#", "ASP.NET", "MSSQL", "PostgreSQL", "OracleDB", "SVN"],
  },
];

export const projects = [
  {
    tag: "Private Equity",
    name: "DealEdge",
    description:
      "Private equity analytics platform at Cepres. Delivered AI semantic search across industries, geographies, charts, and reports; built interactive data visualisations; implemented import/export pipelines; and contributed across the full product stack.",
    stack: [".NET", "React", "Azure OpenAI", "Azure AI Search", "Azure AI Foundry"],
    github: "",
    demo: "https://dealedge.cepres.com",
  },
  {
    tag: "Private Equity",
    name: "Predictive Intelligence",
    description:
      "Rewrote the portfolio analysis module — responsible for calculating core Private Equity metrics — from C++ and Python to .NET. Implemented Secondaries as a new asset type, extending the platform's analytical coverage.",
    stack: [".NET", "React","C++", "Python", "Docker", "CI/CD", "Azure DevOps Pipelines"],
    github: "",
    demo: "https://cepres.com/solutions/predictive-intelligence",
  },
  {
    tag: "Military Tech",
    name: "Defense Platform UI",
    description:
      "Greenfield React frontend for a classified military-tech system. Microservice backend with Kafka event streaming and Kubernetes orchestration.",
    stack: ["React", "Kafka", "Kubernetes", "MassTransit", "Docker"],
    github: "",
    demo: "",
  },
  {
    tag: "E-commerce CRM",
    name: "Inventorix CRM",
    description:
      "Full-featured CRM for UK retail with Etsy & Shopify integrations, Elasticsearch-powered search, and a Blazor admin portal.",
    stack: ["React", ".NET", "Elasticsearch", "Blazor", "OAuth2"],
    github: "",
    demo: "",
  },
  {
    tag: "ERP Migration",
    name: "ERP Web Migration",
    description:
      "Migrated a C++ desktop ERP to a modern web stack, adding multi-database support (MSSQL, PostgreSQL, Oracle) and web-based HR/finance modules.",
    stack: ["C#", "C++", "MSSQL", "PostgreSQL", "OracleDB", "ASP.NET Core"],
    github: "",
    demo: "",
  },
];

export const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/vladyslav-shevchenko-47984595", icon: "li" },
  { label: "GitHub",   href: "https://github.com/osteg0th",   icon: "gh" },
  { label: "Email",    href: "mailto:v.v.shevchenko1997@gmail.com", icon: "em" },
  { label: "Telegram", href: "https://t.me/VladislavShevchenko", icon: "tg" },
];
