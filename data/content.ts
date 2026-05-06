export const profile = {
  name: "Vladyslav",
  surname: "Shevchenko",
  title: "Senior Software Engineer",
  tagline: "Fullstack Engineer // .NET + React // 7+ Years",
  bio: "I build and ship full-stack systems — clean .NET backends, React frontends, and everything in between. Over 7 years I've delivered production software for PE firms, military tech, UK retail, and enterprise ERP. I own things end to end, mentor teams, and move fast without cutting corners.",
  email: "v.v.shevchenko1997@gmail.com",
  location: "Ukraine, Kyiv",
  availableForHire: true,
};

export const keywords = [
  { label: ".NET / C#",     highlight: true  },
  { label: "React",         highlight: true  },
  { label: "Azure OpenAI",  highlight: false },
  { label: "Microservices", highlight: false },
  { label: "Docker / K8s",  highlight: false },
  { label: "TypeScript",    highlight: false },
];

export const stats = [
  { index: "_01", value: "7+",  label: "Yrs Exp"      },
  { index: "_02", value: "4",   label: "Industries"   },
  { index: "_03", value: "4",   label: "Companies"    },
  { index: "_04", value: "30+", label: "Technologies" },
];

export const skills = [
  "C# / .NET", "ASP.NET Core", "EF Core", "Blazor",
  "React", "TypeScript", "Redux / MobX", "Node.js", "Next.js", "SignalR",
  "MassTransit", "Kafka", "RabbitMQ",
  "Docker", "Kubernetes", "Rancher", "Octopus",
  "Azure OpenAI", "Azure AI Foundry", "Azure Search", "Azure DevOps", "Azure Functions",
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
      "Implementing AI-powered market forecasting features on a platform used by global PE investment teams.",
      "Built multi-entity semantic search using Azure OpenAI and Azure AI Search, cutting analyst lookup time significantly.",
      "Leading migration of legacy C++ and Python services to .NET — improving maintainability and performance.",
      "Developing internal agentic tools including an AI-assisted code review system, reducing review cycle time.",
      "Mentoring frontend and backend engineers toward fullstack proficiency.",
      "Set up CI/CD pipelines improving deployment reliability and release cadence.",
    ],
    stack: [".NET", "Azure OpenAI", "Azure AI Search", "Azure AI Foundry", "Azure DevOps", "C++", "Python", "CI/CD"],
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
    name: "AI Market Forecaster",
    description:
      "Market prediction platform with AI-driven pipelines and Azure OpenAI-powered semantic search for private equity analysts at Cepres.",
    stack: [".NET", "Azure OpenAI", "Azure AI Foundry", "Azure Search"],
    github: "",
    demo: "",
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
    stack: ["C#", "C++", "PostgreSQL", "OracleDB", "ASP.NET Core"],
    github: "",
    demo: "",
  },
];

export const socials = [
  { label: "LinkedIn", href: "https://linkedin.com/in/YOUR_HANDLE", icon: "li" },
  { label: "GitHub",   href: "https://github.com/YOUR_HANDLE",   icon: "gh" },
  { label: "Email",    href: "mailto:v.v.shevchenko1997@gmail.com", icon: "em" },
  { label: "Telegram", href: "https://t.me/YOUR_HANDLE",          icon: "tg" },
];
