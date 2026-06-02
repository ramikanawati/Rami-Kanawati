// Public profile only — email/phone are intentionally NOT here.
// They live server-side in CONTACT_TO_EMAIL (.env.local) and are
// used by /api/contact to deliver messages to the inbox.
export const profile = {
  name: "Rami Kanawati",
  role: "Tech Lead & Co-founder · Full-Stack Engineer",
  location: "UK · UAE",
  basedIn: "Splitting time between Ely, United Kingdom and the UAE",
  status: "Available for select engagements",
  social: {
    github: "https://github.com/ramikanawati",
    linkedin: "https://www.linkedin.com/in/rkanawati96",
    youtube: "https://www.youtube.com/channel/UCSKbvK9feFJpXkNOyoxODDQ",
    facebook: "https://www.facebook.com/rkanawati96",
    instagram: "https://www.instagram.com/rami_kanawati/"
  }
};

export const summary = `Full-stack engineer and AI agent builder. Currently Tech Lead at Makkinni LLC and Application Developer at Dunkin' (UAE & Kuwait). Ships production-grade React/Next.js front ends, React Native mobile apps, and ASP.NET Core APIs on PostgreSQL/MSSQL, deployed on AWS with Docker, Kubernetes, and CI/CD. Architects autonomous AI agents on local and frontier LLMs for privacy-focused workflow automation.`;

export const techStack = [
  { name: "Next.js", category: "Frontend", status: "active" },
  { name: "React Native", category: "Mobile", status: "active" },
  { name: "TypeScript", category: "Language", status: "active" },
  { name: ".NET / C#", category: "Backend", status: "active" },
  { name: "PostgreSQL", category: "Database", status: "active" },
  { name: "AWS", category: "Cloud", status: "active" },
  { name: "Docker / K8s", category: "DevOps", status: "active" },
  { name: "Ollama", category: "AI Runtime", status: "active" },
  { name: "Anthropic Claude", category: "AI", status: "active" },
  { name: "Python", category: "Automation", status: "active" }
] as const;

export type Experience = {
  company: string;
  role: string;
  period: string;
  type: string;
  description: string;
  highlights: string[];
  tags: string[];
  accent: "cyan" | "emerald";
  website?: string;
};

export const experiences: Experience[] = [
  {
    company: "Makkinni LLC",
    role: "Co-founder & Tech Lead",
    period: "Apr 2025 — Present",
    type: "Part-time · Educational marketplace startup",
    description:
      "Directing complete product architecture, technical roadmap, and engineering for an early-stage educational marketplace.",
    highlights: [
      "Designing a high-performance superadmin panel on Next.js + .NET with SSR and scalable services.",
      "Leading cross-platform mobile strategy on React Native with a unified iOS/Android codebase.",
      "Designed and optimised a relational PostgreSQL schema for complex marketplace transactions.",
      "Implemented autonomous agents and self-hosted local LLMs on dedicated hardware for privacy-focused, on-prem AI features."
    ],
    tags: ["Next.js", ".NET", "React Native", "PostgreSQL", "Local LLMs"],
    accent: "emerald",
    website: "https://makkinni.com/"
  },
  {
    company: "Continental Food LLC (Dunkin' UAE & KW · GongCha · Wonder Bee · Booth Cookies)",
    role: "Application Developer",
    period: "2022 — Present",
    type: "Full-time · Permanent · Multi-brand F&B group",
    description:
      "End-to-end ownership of loyalty, ordering, HR, and digital signage platforms across the group's brands — Dunkin' UAE & Kuwait, GongCha, Wonder Bee, and Booth Cookies.",
    highlights: [
      "Built and shipped the digital signage platform on Samsung Tizen + an Angular control panel, replacing third-party software and saving the group ~US$50k/year in licensing fees.",
      "Developed and continuously enhanced the ordering system across Dunkin' and GongCha — payments, real-time order routing, store integration, throughput tuning.",
      "Loyalty & e-commerce: React Native app + Next.js admin + ASP.NET Core services with secure earn/redeem tokenisation and high availability.",
      "Built the HR portal end-to-end: biometric attendance-machine integration, employee self-service, multi-step leave workflows, and role-based access.",
      "AWS deployments with Docker/K8s + CI/CD; full observability, SQL and API performance tuning."
    ],
    tags: [
      "React Native",
      "Next.js",
      "ASP.NET Core",
      "Tizen",
      "Angular",
      "AWS",
      "K8s",
      "PostgreSQL"
    ],
    accent: "cyan"
  },
  {
    company: "Unite Trading LLC",
    role: "Web Developer Intern",
    period: "2022",
    type: "Internship",
    description:
      "Built and maintained UI components aligned to design specs; participated in the full sprint cycle.",
    highlights: [
      "Implemented HTML/CSS/JS UI components from design.",
      "Used Git workflows; participated in stand-ups and sprint planning.",
      "Troubleshot frontend issues to improve UX and stability."
    ],
    tags: ["HTML", "CSS", "JavaScript", "Git"],
    accent: "cyan"
  }
];

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  status: "shipped" | "in-development" | "private";
  category: "AI Agent" | "Mobile" | "Platform" | "AR/Game";
  stack: string[];
  metrics?: { label: string; value: string }[];
  link?: string;
  accent: "cyan" | "emerald";
};

export const projects: Project[] = [
  {
    slug: "jobhunter",
    name: "JobHunter AI Agent",
    tagline: "Autonomous job-search agent on local LLMs",
    description:
      "Telegram-driven autonomous agent that aggregates multi-source job boards (Reed, Adzuna, Greenhouse, Lever, JSearch), scores candidate fit with local LLMs (Ollama running Qwen2.5 / Llama 3.3), and generates a tailored CV and cover letter per application.",
    status: "in-development",
    category: "AI Agent",
    stack: ["Python", "Ollama", "Qwen2.5", "Llama 3.3", "SQLAlchemy", "httpx", "python-telegram-bot"],
    metrics: [
      { label: "Sources", value: "5+" },
      { label: "Models", value: "Local" },
      { label: "Privacy", value: "On-Prem" }
    ],
    accent: "cyan"
  },
  {
    slug: "jarvis",
    name: "Jarvis AI Assistant",
    tagline: "Personal automation & workflow co-pilot",
    description:
      "Custom-built AI assistant for personal automation and workflow management. Orchestrates agents across local and frontier LLMs for daily ops, calendar, and code workflows.",
    status: "private",
    category: "AI Agent",
    stack: ["Python", "Anthropic Claude", "Ollama", "MCP", "Workflow Automation"],
    metrics: [
      { label: "Mode", value: "Hybrid" },
      { label: "Protocol", value: "MCP" }
    ],
    accent: "emerald"
  },
  {
    slug: "makkinni",
    name: "Makkinni LLC",
    tagline: "Educational marketplace · Tech Lead product",
    description:
      "Cross-platform educational marketplace with a Next.js + .NET superadmin panel and a unified React Native mobile app. PostgreSQL schema engineered for complex marketplace transactions; on-prem AI features powered by self-hosted local LLMs.",
    status: "in-development",
    category: "Platform",
    stack: ["Next.js", ".NET", "React Native", "PostgreSQL", "Local LLMs"],
    link: "https://makkinni.com/",
    accent: "emerald"
  },
  {
    slug: "tradewhiz",
    name: "Trade Whiz",
    tagline: "Real-time cross-platform trading assistant",
    description:
      "Cross-platform trading assistant with real-time notifications and watchlists. React Native client backed by .NET services on PostgreSQL.",
    status: "shipped",
    category: "Mobile",
    stack: ["React Native", ".NET", "PostgreSQL", "Real-time"],
    accent: "cyan"
  },
  {
    slug: "dunkin",
    name: "Continental Food LLC Platform",
    tagline: "Multi-brand ordering, loyalty, HR & signage · Dunkin' · GongCha · Wonder Bee · Booth Cookies",
    description:
      "End-to-end platform spanning the group's brands: ordering systems for Dunkin' (UAE & KW) and GongCha, loyalty + e-commerce, an HR portal with attendance-machine integration and leave workflows, and a Samsung Tizen digital-signage stack that replaced licensed software and saved ~US$50k/year.",
    status: "shipped",
    category: "Platform",
    stack: [
      "React Native",
      "Next.js",
      "ASP.NET Core",
      "AWS",
      "K8s",
      "Tizen",
      "Angular",
      "PostgreSQL"
    ],
    metrics: [
      { label: "Brands", value: "5" },
      { label: "Markets", value: "UAE · KW" },
      { label: "Saved/yr", value: "~$50k" }
    ],
    accent: "cyan"
  },
  {
    slug: "marjn",
    name: "MARJN — AR Indoor Navigation",
    tagline: "Unity + Vuforia campus navigation",
    description:
      "Augmented-reality indoor positioning and wayfinding prototype built on Unity + Vuforia for university campus navigation.",
    status: "shipped",
    category: "AR/Game",
    stack: ["Unity", "Vuforia", "C#", "AR"],
    accent: "emerald"
  }
];

export type CreativeWork = {
  title: string;
  type: string;
  description: string;
  tags: string[];
};

export const creativeLab: CreativeWork[] = [
  {
    title: "Dungeon Crawler",
    type: "Unity · Game",
    description:
      "A Unity game built during university — third-person dungeon exploration with procedural elements.",
    tags: ["Unity", "C#", "Game Design"]
  },
  {
    title: "Home Invasion",
    type: "Unreal Engine · Game",
    description:
      "An Unreal Engine action-comedy where the furniture has had enough. Sofas, lamps, and chairs come alive and storm the house — and your only defence is a red-ball gun. Fast, physics-driven combat with chaotic AI and a deliberately absurd premise.",
    tags: ["Unreal Engine", "Blueprint", "AI Behaviour", "Physics"]
  },
  {
    title: "3D Modelling & Animation",
    type: "Autodesk Maya · Render",
    description:
      "Character and environment work in Autodesk Maya — modelling, rigging, lighting, and animation studies.",
    tags: ["Maya", "Modelling", "Animation", "Lighting"]
  }
];

export const skills = {
  "Leadership & Architecture": [
    "Co-founder / Tech Lead",
    "Technical Leadership",
    "Product Architecture",
    "Engineering Roadmap",
    "0-to-1 Product",
    "Cross-functional Collaboration"
  ],
  "AI & Automation": [
    "AI Agents",
    "LLM Integration",
    "Anthropic Claude API",
    "Ollama (local LLMs)",
    "Self-hosted LLM Infrastructure",
    "Privacy-preserving / on-prem AI",
    "Prompt Engineering",
    "MCP (Model Context Protocol)",
    "Telegram Bots",
    "Workflow Automation",
    "Python"
  ],
  "Frontend & Mobile": [
    "React",
    "Next.js (SSR)",
    "TypeScript",
    "JavaScript",
    "React Native (iOS / Android)",
    "Angular",
    "Tailwind",
    "Framer Motion",
    "HTML",
    "CSS"
  ],
  "Backend & APIs": ["C#", "ASP.NET Core", ".NET Framework", "REST APIs", "Swagger"],
  Databases: ["PostgreSQL", "MSSQL", "SQL", "SSMS / SSRS", "Database Optimization"],
  "Cloud & DevOps": ["AWS", "Docker", "Kubernetes", "GitHub Actions", "CI/CD"],
  "Creative & 3D": ["Unity", "Unreal Engine", "Autodesk Maya", "Samsung Tizen"]
} as const;

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "building-production-ai-agents",
    title: "Building Production-Grade AI Agents on Local LLMs",
    excerpt:
      "A deep dive into architecting autonomous AI agents that run on local models like Ollama, prioritizing privacy, cost, and control while maintaining production quality.",
    date: "2025-01-15",
    readTime: "12 min read",
    category: "AI & Architecture",
    tags: ["AI Agents", "Ollama", "LLMs", "Architecture", "Python"]
  },
  {
    slug: "multi-brand-platform-architecture",
    title: "Scaling Multi-Brand Platforms: Lessons from Continental Food",
    excerpt:
      "How we architected and scaled a single codebase to serve 5 brands across 2 markets with unique requirements, handling 10M+ transactions yearly.",
    date: "2025-01-10",
    readTime: "10 min read",
    category: "Full-Stack Architecture",
    tags: ["Scaling", "Next.js", ".NET", "Architecture", "Multi-tenant"]
  },
  {
    slug: "react-native-monorepo-patterns",
    title: "React Native Monorepo Patterns for Cross-Platform Teams",
    excerpt:
      "Structuring a React Native monorepo to share business logic, components, and utilities across iOS, Android, and web while maintaining developer velocity.",
    date: "2025-01-05",
    readTime: "9 min read",
    category: "Mobile Development",
    tags: ["React Native", "Monorepo", "Mobile", "TypeScript"]
  }
];

export type CaseStudy = {
  slug: string;
  projectName: string;
  title: string;
  challenge: string;
  solution: string;
  results: string[];
  metrics: { label: string; value: string }[];
  stack: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "dunkin-digital-signage",
    projectName: "Continental Food LLC",
    title: "Replacing $50k/year in Licensing with a Custom Tizen Stack",
    challenge:
      "Continental Food Group (Dunkin', GongCha, Wonder Bee, Booth Cookies) was paying ~$50k annually for third-party digital signage software across 200+ stores in the UAE and Kuwait. The vendor was slow to iterate, inflexible on customization, and presented a strategic dependency.",
    solution:
      "Architected and built a custom digital signage platform from scratch: Samsung Tizen C++ backend on store hardware, an Angular control panel for remote campaign management, and real-time content delivery via ASP.NET Core APIs. Integrated with point-of-sale systems for live inventory, pricing, and promotional syncing.",
    results: [
      "Eliminated $50k annual licensing cost in year one",
      "Deployed to 200+ stores across UAE and Kuwait",
      "Campaign update latency reduced from 24h to <2 minutes",
      "Store staff training time reduced from 4 hours to 30 minutes",
      "99.8% uptime SLA with redundant control centers"
    ],
    metrics: [
      { label: "Annual Savings", value: "$50k+" },
      { label: "Stores", value: "200+" },
      { label: "Uptime", value: "99.8%" },
      { label: "Time to Deploy", value: "<2m" }
    ],
    stack: ["Samsung Tizen", "C++", "Angular", "ASP.NET Core", "AWS"],
    testimonial: {
      quote:
        "What would have taken vendors months to build, Rami shipped in weeks. The system is rock-solid, scales effortlessly, and the ROI is immediate.",
      author: "Operations Director",
      role: "Continental Food LLC"
    }
  },
  {
    slug: "makkinni-marketplace-from-zero",
    projectName: "Makkinni LLC",
    title: "0-to-1 Educational Marketplace on Next.js + React Native",
    challenge:
      "Building a cross-platform educational marketplace from scratch required a scalable superadmin panel, a unified iOS/Android experience, a complex relational database for marketplace transactions, and privacy-focused AI features — all within tight timelines.",
    solution:
      "Designed a full-stack architecture: Next.js SSR superadmin with .NET Core microservices, a unified React Native mobile app, and a PostgreSQL schema optimized for marketplace queries. Integrated on-premises local LLMs (Ollama) for privacy-preserving recommendation and moderation features.",
    results: [
      "Full mobile app shipped 6 weeks before iOS/Android go-live",
      "Superadmin onboards new educators in <5 minutes",
      "PostgreSQL queries optimized to <100ms (p99)",
      "On-prem AI inference eliminates vendor lock-in",
      "Unified codebase reduced time-to-market by 40%"
    ],
    metrics: [
      { label: "Time to Shipped", value: "6 weeks" },
      { label: "Query Latency (p99)", value: "<100ms" },
      { label: "TTM Improvement", value: "40%" },
      { label: "Code Reuse", value: "65%" }
    ],
    stack: ["Next.js", "React Native", ".NET Core", "PostgreSQL", "Ollama", "TypeScript"]
  },
  {
    slug: "loyalty-platform-high-availability",
    projectName: "Continental Food LLC",
    title: "High-Availability Loyalty Platform Serving 2M+ Users",
    challenge:
      "Dunkin' and GongCha needed a loyalty platform handling peak traffic of 100k concurrent users during promotions, processing earn/redeem transactions with zero data loss, and integrating with legacy point-of-sale systems across 200+ stores.",
    solution:
      "Built a React Native mobile app + Next.js admin console backed by ASP.NET Core APIs on PostgreSQL. Implemented distributed transaction handling for earn/redeem operations, Redis caching for promotional tiers, and AWS load balancing with auto-scaling. Integrated real-time webhooks with POS systems.",
    results: [
      "Processed 2.5M transactions in peak day (99.99% success rate)",
      "Mobile app launch in 8 weeks",
      "Zero double-spend vulnerabilities",
      "Average API response time: 45ms (p99: 200ms)",
      "Automatic failover reduces downtime to <30s"
    ],
    metrics: [
      { label: "Peak Concurrency", value: "100k users" },
      { label: "Success Rate", value: "99.99%" },
      { label: "Response Time (p99)", value: "200ms" },
      { label: "Failover Time", value: "<30s" }
    ],
    stack: ["React Native", "Next.js", "ASP.NET Core", "PostgreSQL", "Redis", "AWS"]
  }
];
