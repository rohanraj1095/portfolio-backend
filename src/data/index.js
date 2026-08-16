import {
  Settings,
  Database,
  CloudCog,
  Wrench,
  Rocket,
  Code2,
  Users,
  Star,
  ShieldCheck,
  Braces,
} from "lucide-react";

// Change this to your real GitHub username — GithubActivity.jsx uses it
// to pull real public stats and render your real contribution graph.
export const GITHUB_USERNAME = "rohanraj1095";

export const NAV = [
  "Home",
  "About",
  "Skills",
  "Services",
  "Projects",
  "Experience",
  "Education",
  "GitHub",
  "Contact",
];

// export const SKILLS = [
//   {
//     title: "Backend",
//     Icon: Settings,
//     color: "#3ee8a8",
//     bc: "rgba(62,232,168,0.22)",
//     items: [
//       "Node.js",
//       "Express.js",
//       "RESTful API Design",
//       "MVC Architecture",
//       "Repository Pattern",
//       "Middleware Development",
//     ],
//   },
//   {
//     title: "Database & Caching",
//     Icon: Database,
//     color: "#f3a649",
//     bc: "rgba(243,166,73,0.22)",
//     items: [
//       "MongoDB",
//       "Mongoose",
//       "PostgreSQL",
//       "Redis",
//       "Database Indexing",
//       "Aggregation Pipelines",
//     ],
//   },
//   {
//     title: "Security & Auth",
//     Icon: ShieldCheck,
//     color: "#a78bfa",
//     bc: "rgba(167,139,250,0.22)",
//     items: [
//       "JWT",
//       "OAuth",
//       "RBAC",
//       "CORS",
//       "Helmet",
//       "Firebase Authentication",
//       "Joi Validation",
//       "Rate Limiting",
//     ],
//   },
//   {
//     title: "DevOps",
//     Icon: CloudCog,
//     color: "#5bb6f7",
//     bc: "rgba(91,182,247,0.22)",
//     items: ["Git", "GitHub", "Linux", "CI/CD", "Vercel"],
//   },
//   {
//     title: "Tools & Testing",
//     Icon: Wrench,
//     color: "#f06a5a",
//     bc: "rgba(240,106,90,0.22)",
//     items: [
//       "Postman",
//       "Swagger / OpenAPI",
//       "API Versioning",
//       "API Documentation",
//       "Unit Testing",
//       "Integration Testing",
//     ],
//   },
//   {
//     title: "Languages & Frontend",
//     Icon: Braces,
//     color: "#f3c969",
//     bc: "rgba(243,201,105,0.22)",
//     items: ["JavaScript (ES6+)", "C++", "React.js", "Tailwind CSS"],
//   },
// ];

export const SKILLS = [
  {
    title: "Backend",
    Icon: Settings,
    color: "#3ee8a8",
    bc: "rgba(62,232,168,0.22)",
    items: [
      "Node.js",
      "Express.js",
      "REST API Design",
      "Middleware",
      "API Versioning",
      "Swagger / OpenAPI",
    ],
  },

  {
    title: "Databases",
    Icon: Database,
    color: "#f3a649",
    bc: "rgba(243,166,73,0.22)",
    items: [
      "MongoDB",
      "Mongoose",
      "PostgreSQL",
      "Database Design",
      "Indexing",
      "Aggregation Pipelines",
      "Query Optimization",
    ],
  },

  {
    title: "Caching & Async",
    Icon: Database,
    color: "#5bb6f7",
    bc: "rgba(91,182,247,0.22)",
    items: ["Redis", "Caching Strategies", "Background Jobs", "Message Queues"],
  },

  {
    title: "Security & Auth",
    Icon: ShieldCheck,
    color: "#a78bfa",
    bc: "rgba(167,139,250,0.22)",
    items: [
      "JWT",
      "Refresh Tokens",
      "RBAC",
      "CORS",
      "Helmet",
      "Joi Validation",
      "Rate Limiting",
    ],
  },

  {
    title: "Testing & API",
    Icon: Wrench,
    color: "#f06a5a",
    bc: "rgba(240,106,90,0.22)",
    items: [
      "Postman",
      "Swagger / OpenAPI",
      "Unit Testing",
      "Integration Testing",
      "API Testing",
    ],
  },

  {
    title: "DevOps & Tools",
    Icon: CloudCog,
    color: "#5bb6f7",
    bc: "rgba(91,182,247,0.22)",
    items: [
      "Git",
      "GitHub",
      "Linux",
      "Docker",
      "GitHub Actions",
      "CI/CD",
      "Nginx",
    ],
  },

  {
    title: "Languages",
    Icon: Braces,
    color: "#f3c969",
    bc: "rgba(243,201,105,0.22)",
    items: ["JavaScript (ES6+)", "TypeScript", "SQL"],
  },
];

export const SERVICES = [
  {
    icon: "🔌",
    title: "REST API Development",
    color: "#3ee8a8",
    bc: "rgba(62,232,168,0.15)",
    desc: "Design and build production-grade REST APIs with Node.js and Express.js — clean MVC structure, repository pattern, and full request validation.",
  },
  {
    icon: "🗄️",
    title: "Database Design & Optimization",
    color: "#f3a649",
    bc: "rgba(243,166,73,0.15)",
    desc: "MongoDB/Mongoose and PostgreSQL schema design, indexing strategies, and aggregation pipelines tuned for fast, reliable queries at scale.",
  },
  {
    icon: "⚡",
    title: "Caching & Performance",
    color: "#5bb6f7",
    bc: "rgba(91,182,247,0.15)",
    desc: "Redis caching with dynamic TTLs and skip-cache logic to cut repeated API response times and keep endpoints fast under load.",
  },
  {
    icon: "🔒",
    title: "Auth & Security",
    color: "#a78bfa",
    bc: "rgba(167,139,250,0.15)",
    desc: "JWT + refresh token flows, RBAC, Firebase Authentication, Joi input validation and rate limiting to keep APIs secure by default.",
  },
  {
    icon: "📄",
    title: "API Documentation & Testing",
    color: "#f06a5a",
    bc: "rgba(240,106,90,0.15)",
    desc: "Swagger/OpenAPI documentation, Postman collections, and unit/integration test coverage so APIs are reliable and easy to adopt.",
  },
  {
    icon: "🚀",
    title: "CI/CD & Deployment",
    color: "#34d399",
    bc: "rgba(52,211,153,0.15)",
    desc: "Git-based workflows and CI/CD pipelines on Vercel for fast, reliable deployments with minimal downtime.",
  },
];

export const PROJECTS = [
  {
    title: "SpendSmart – Smart Expense Analytics Platform",
    badge: "Source Available",
    tags: ["Node.js", "Express.js", "MongoDB", "Redis", "JWT", "Joi"],
    grad: "linear-gradient(135deg,#0c2a20,#091a14)",
    desc: "Secure REST APIs managing transactions, categorisation and analytics for 5,000+ transactions/month, with MVC + repository pattern architecture, Redis-cached endpoints and optimised MongoDB aggregation pipelines averaging <500ms query latency.",
    links: {
      code: "https://github.com/rohanraj1095?tab=repositories",
    },
  },
  {
    title: "InsightNet – Real-Time News Web Application",
    badge: "Live",
    tags: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "Firebase Auth",
    ],
    grad: "linear-gradient(135deg,#1a2030,#0a0d12)",
    desc: "Real-time news app delivering concise 100-word summaries through a responsive React/Tailwind UI, backed by Node.js/Express REST APIs with secure Firebase Authentication and CI/CD deployment on Vercel.",
    links: {
      code: "https://github.com/rohanraj1095?tab=repositories",
      live: "https://insightnet.vercel.app/",
    },
  },
];

export const STATS = [
  {
    Icon: Code2,
    end: 2,
    suffix: "+",
    label: "Years of Experience",
    color: "#3ee8a8",
  },
  {
    Icon: Rocket,
    end: 3,
    suffix: "+",
    label: "Projects Delivered",
    color: "#f3c969",
  },
  {
    Icon: Users,
    end: 5000,
    suffix: "+",
    label: "Monthly Transactions Processed",
    color: "#5bb6f7",
  },
  {
    Icon: Star,
    end: 10,
    suffix: "+",
    label: "Core Technologies",
    color: "#f06a5a",
  },
];

export const EXPERIENCES = [
  {
    role: "Backend Developer",
    company: "Tech Mahindra Ltd.",
    location: "Noida, India",
    period: "Mar 2024 – Present",
    type: "Full-time",
    current: true,
    client: "Client: BrightSpeed",
    points: [
      "Designed and developed scalable REST APIs serving production applications using Node.js and Express.js.",
      "Improved API response times by implementing Redis caching and optimizing MongoDB queries.",
      "Strengthened backend security through JWT authentication, request validation (Joi), and rate limiting (express-rate-limit).",
      "Collaborated with QA, frontend developers, and senior engineers to deliver production-ready features within Agile sprints.",
      "Investigated and resolved production issues, contributing to improved application stability and fewer post-release defects.",
      "Participated in code reviews and API design discussions to maintain high engineering standards and consistent, production-ready backend logic.",
    ],
    tech: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redis",
      "JWT",
      "Joi",
      "REST APIs",
    ],
  },
];

export const EDUCATION = [
  {
    degree: "B.Tech — Computer Science & Engineering",
    school: "University of Engineering and Management, Jaipur, Rajasthan",
    period: "2019 – 2023",
    grade: "CGPA 8.14 / 10",
    highlights: [],
  },
];

export const TERMINAL_COMMANDS = {
  help: {
    output: [
      { text: "┌─────────────────────────────────┐", color: "#1e3329" },
      { text: "│   Rohan Raj · Portfolio v2.0    │", color: "#3ee8a8" },
      { text: "└─────────────────────────────────┘", color: "#1e3329" },
      { text: "Commands:", color: "#f3c969" },
      { text: "  whoami      → Identity & summary", color: "#94a3b8" },
      { text: "  about       → Short bio", color: "#94a3b8" },
      { text: "  company     → Where I work now", color: "#94a3b8" },
      { text: "  skills      → Full tech stack", color: "#94a3b8" },
      { text: "  stack       → Core backend stack", color: "#94a3b8" },
      { text: "  projects    → Featured builds", color: "#94a3b8" },
      { text: "  experience  → Work history", color: "#94a3b8" },
      { text: "  education   → Degree & university", color: "#94a3b8" },
      { text: "  status      → Availability", color: "#94a3b8" },
      { text: "  contact     → Reach me", color: "#94a3b8" },
      { text: "  resume      → Download my resume", color: "#94a3b8" },
      { text: "  github      → Open my GitHub", color: "#94a3b8" },
      { text: "  linkedin    → Open my LinkedIn", color: "#94a3b8" },
      { text: "  theme       → Cycle terminal accent", color: "#94a3b8" },
      { text: "  clear       → Clear terminal", color: "#94a3b8" },
    ],
  },
  whoami: {
    output: [
      { text: "╔══════════════════════════════════╗", color: "#1e3329" },
      { text: "║  Rohan Raj — Backend Developer   ║", color: "#3ee8a8" },
      { text: "╚══════════════════════════════════╝", color: "#1e3329" },
      { text: "🎯  2+ Years of Production Experience", color: "#f3c969" },
      { text: "⚙️  Node.js Developer · REST API Specialist", color: "#cbd5e1" },
      { text: "🔥  Node.js · Express.js · MongoDB · Redis", color: "#cbd5e1" },
      { text: "🏗️  MVC Architecture & Repository Pattern", color: "#cbd5e1" },
      { text: "📍  Noida, India  ·  Open to Remote", color: "#94a3b8" },
      { text: "✅  Available for new opportunities", color: "#3ee8a8" },
    ],
  },
  about: {
    output: [
      { text: "Backend Developer with 2+ years building", color: "#cbd5e1" },
      { text: "scalable backend systems and secure REST", color: "#cbd5e1" },
      { text: "APIs using Node.js, Express.js, MongoDB,", color: "#cbd5e1" },
      { text: "PostgreSQL and Redis. Focused on clean,", color: "#cbd5e1" },
      { text: "maintainable, production-ready code.", color: "#cbd5e1" },
    ],
  },
  company: {
    output: [
      { text: "$ company", color: "#3ee8a8" },
      { text: "Tech Mahindra Ltd.", color: "#f3c969" },
      { text: "Role: Backend Developer", color: "#cbd5e1" },
      { text: "Client: BrightSpeed", color: "#cbd5e1" },
      { text: "Since: Mar 2024 · Noida, India", color: "#94a3b8" },
    ],
  },
  status: {
    output: [
      { text: "🟢  Open to Backend Opportunities", color: "#3ee8a8" },
      { text: "    Full-time · Remote-friendly", color: "#94a3b8" },
    ],
  },
  skills: {
    output: [
      { text: "── Backend ──────────────────────────", color: "#3ee8a8" },
      { text: "   Node.js  Express.js  REST APIs", color: "#cbd5e1" },
      { text: "   MVC Architecture  Repository Pattern", color: "#cbd5e1" },
      { text: "── Database & Caching ───────────────", color: "#f3a649" },
      { text: "   MongoDB  Mongoose  PostgreSQL  Redis", color: "#cbd5e1" },
      { text: "   Indexing  Aggregation Pipelines", color: "#cbd5e1" },
      { text: "── Security & Auth ──────────────────", color: "#a78bfa" },
      { text: "   JWT  OAuth  RBAC  Joi  Firebase Auth", color: "#cbd5e1" },
      { text: "── DevOps & Tools ───────────────────", color: "#f06a5a" },
      { text: "   Git  GitHub  Linux  CI/CD  Vercel", color: "#cbd5e1" },
      { text: "   Postman  Swagger/OpenAPI", color: "#cbd5e1" },
    ],
  },
  stack: {
    output: [
      { text: "Node.js", color: "#3ee8a8" },
      { text: "Express.js", color: "#3ee8a8" },
      { text: "MongoDB", color: "#f3a649" },
      { text: "PostgreSQL", color: "#f3a649" },
      { text: "Redis", color: "#f3a649" },
      { text: "React", color: "#5bb6f7" },
      { text: "Tailwind", color: "#5bb6f7" },
    ],
  },
  projects: {
    output: [
      { text: "┌─ SpendSmart – Expense Analytics Platform", color: "#3ee8a8" },
      { text: "│  5,000+ txns/mo · Node·MongoDB·Redis", color: "#64748b" },
      { text: "└─ InsightNet – Real-Time News App", color: "#3ee8a8" },
      { text: "   Live on Vercel · React·Node·Firebase", color: "#64748b" },
    ],
  },
  experience: {
    output: [
      { text: "2+ Years of Backend Development", color: "#f3c969" },
      { text: "", color: "#64748b" },
      {
        text: "▶  Backend Developer @ Tech Mahindra Ltd.",
        color: "#f3c969",
      },
      {
        text: "   Mar 2024 – Present · Full-time · Noida",
        color: "#64748b",
      },
      {
        text: "   Client: BrightSpeed · REST APIs & caching",
        color: "#94a3b8",
      },
    ],
  },
  education: {
    output: [
      { text: "🎓  B.Tech — Computer Science & Engineering", color: "#3ee8a8" },
      {
        text: "    University of Engineering and Management",
        color: "#cbd5e1",
      },
      { text: "    Jaipur, Rajasthan · 2019 – 2023", color: "#94a3b8" },
      { text: "    CGPA: 8.14 / 10", color: "#f3c969" },
    ],
  },
  contact: {
    output: [
      { text: "Let's build something together! 🤝", color: "#3ee8a8" },
      { text: "", color: "#64748b" },
      { text: "✉   rohanraj1095@gmail.com", color: "#f3c969" },
      { text: "🔗  linkedin.com/in/rohanraj1095", color: "#5bb6f7" },
      { text: "🐙  github.com/rohanraj1095", color: "#94a3b8" },
      { text: "📍  Noida, India", color: "#94a3b8" },
      { text: "", color: "#64748b" },
      { text: "⚡  Usually replies within 24 hours", color: "#64748b" },
    ],
  },
  resume: {
    output: [{ text: "📄  Opening resume...", color: "#3ee8a8" }],
  },
  github: {
    output: [
      { text: "🐙  Opening github.com/rohanraj1095 ...", color: "#3ee8a8" },
    ],
  },
  linkedin: {
    output: [
      {
        text: "🔗  Opening linkedin.com/in/rohanraj1095 ...",
        color: "#3ee8a8",
      },
    ],
  },
};

export const AUTO_COMMANDS = [
  "whoami",
  "company",
  "stack",
  "projects",
  "status",
];

export const BOOT_LINES = [
  { text: "Loading Portfolio...", color: "#64748b", delay: 150 },
  { text: "██████████████████ 100%", color: "#3ee8a8", delay: 350 },
  { text: "Connected.", color: "#3ee8a8", delay: 250 },
  { text: "Welcome.", color: "#cbd5e1", delay: 250 },
];

export const QUICK_CMDS = [
  "help",
  "whoami",
  "stack",
  "skills",
  "projects",
  "experience",
  "contact",
  "resume",
  "github",
];

export const CONTACT_STEPS = [
  {
    key: "name",
    prompt: "What's your name?",
    placeholder: "e.g. John Doe",
    color: "#f3c969",
  },
  {
    key: "email",
    prompt: "Your email address?",
    placeholder: "e.g. john@example.com",
    color: "#5bb6f7",
  },
  {
    key: "message",
    prompt: "What would you like to say?",
    placeholder: "e.g. Let's work together!",
    color: "#3ee8a8",
  },
];

export const PROFILE = {
  name: "Rohan Raj",
  role: "Backend Developer",
  location: "Noida, India",
  email: "rohanraj1095@gmail.com",
  phone: "+91 9162952674",
  linkedin: "https://linkedin.com/in/rohanraj1095",
  github: "https://github.com/rohanraj1095",
  resume: "/Rohan_Raj_Resume.docx",
  summary:
    "Backend Developer with 2+ years of experience building scalable backend systems using Node.js, Express.js, MongoDB, PostgreSQL, and Redis. Experienced in designing secure REST APIs, implementing JWT authentication, caching strategy (Redis), and database optimization for production applications.",
};
