export const EMAIL = "adityarajtripathi3@gmail.com";
export const GITHUB_URL = "https://github.com/adityaT39";
export const LINKEDIN_URL = "https://linkedin.com/in/aditya-tripathi";
export const RESUME_URL = `${process.env.PUBLIC_URL}/resume.pdf`;

export const SECTIONS = [
  { id: "about", num: "01", label: "About" },
  { id: "experience", num: "02", label: "Experience" },
  { id: "projects", num: "03", label: "Projects" },
  { id: "skills", num: "04", label: "Skills" },
  { id: "education", num: "05", label: "Education" },
  { id: "contact", num: "06", label: "Contact" },
];

export const JOBS = [
  {
    org: "Onpoint Consulting NZ",
    role: "Full Stack Software Developer (Contract)",
    dates: "Jan 2026 – Jul 2026",
    place: "Remote",
    stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Stripe", "Claude API"],
    bullets: [
      "Designed and built two production websites end-to-end as sole developer on Next.js, TypeScript and Supabase (PostgreSQL): the corporate site and OnPoint Talent, a full-stack recruitment platform with Stripe billing and Google OAuth.",
      "Built a suite of AI-powered features on the Claude API — resume feedback, skill extraction, job-fit recommendations, interview prep and cover-letter generation — integrated directly into candidate and employer workflows, replacing a manual shortlisting process.",
      "Shipped the platform to production; now in active daily use by the company, holding a 5.0-star rating across 19 Google reviews, while working with 3 concurrent client stakeholders to translate requirements into shipped features via Agile iteration in Trello.",
    ],
  },
  {
    org: "DVertex Info System (Safaimitra)",
    role: "Software Development Intern",
    dates: "Nov 2024 – Mar 2025",
    place: "Remote",
    stack: ["AWS SNS", "AWS Lambda", "Agile/Scrum", "UAT/QA"],
    bullets: [
      "Resolved 15+ bugs in Safaimitra's live, event-driven push-notification system (AWS SNS/Lambda) and other core modules of the e-waste management app, working within an Agile/Scrum team.",
      "Ran UAT/QA across releases to catch regressions before they reached production, keeping releases stable for live users.",
    ],
  },
  {
    org: "Bell (Best Buy Express)",
    role: "Technology & Sales Associate (Part-time)",
    dates: "Oct 2024 – Nov 2025",
    place: "Kelowna, BC",
    stack: ["Client-facing", "KYC compliance"],
    bullets: [
      "Ranked 2nd in BC for phone plan sales volume; consistently hit 100%+ of monthly targets (2× quota in June) while maintaining KYC compliance in a regulated, high-volume retail environment.",
    ],
  },
];

export const PROJECTS = [
  {
    name: "RAG Evaluation Pipeline",
    year: "2026",
    stack: ["Python", "sentence-transformers", "ChromaDB", "Claude API", "Streamlit"],
    blurb:
      "Full RAG pipeline over 4,500+ chunks from 51 Wikipedia articles — chunking, embeddings, ChromaDB, cross-encoder reranking, cited answers — with a 100-question human-reviewed eval harness, LLM-as-judge grading and GitHub Actions CI.",
    href: "https://github.com/adityaT39/rag-eval-lab",
  },
  {
    name: "Rate Limiter Lab",
    year: "2026",
    stack: ["Python", "FastAPI", "Redis (Lua)", "asyncio", "pytest"],
    blurb:
      "Three Redis-backed rate-limiting algorithms in naive and atomic versions. Reproduced a real race condition — 40 requests through a limit of 10 — fixed it with atomic Lua and drove failures from 20/20 to 0/20.",
    href: "https://github.com/adityaT39/rate-limiter-lab",
  },
  {
    name: "OnPoint Talent",
    year: "2026",
    stack: ["Next.js", "TypeScript", "Supabase", "Stripe", "Claude API"],
    blurb:
      "Full-stack recruitment platform with Stripe billing, Google OAuth and Claude-powered resume feedback, skill extraction and job-fit matching. Shipped to production and in daily use.",
    href: "https://onpointtalent.co.nz",
  },
  {
    name: "OnPoint Corporate Site",
    year: "2026",
    stack: ["Next.js", "TypeScript", "Vercel"],
    blurb:
      "Marketing site designed and shipped solo alongside the platform, built to the same Next.js/TypeScript stack and deployed on Vercel.",
    href: "https://onpointconsulting.co.nz",
  },
];

export const SKILLS = [
  { group: "Languages", items: ["Python", "JavaScript", "TypeScript", "Java", "PHP", "HTML/CSS", "SQL"] },
  {
    group: "Backend & APIs",
    items: ["FastAPI", "Node.js", "Next.js API routes", "REST API design", "OAuth 2.0", "PostgreSQL", "Supabase", "SQLAlchemy", "Redis", "asyncio"],
  },
  { group: "AI / LLM", items: ["Claude API", "LLM-integrated features", "RAG pipelines", "Embeddings", "Vector DBs (ChromaDB)", "Prompt engineering"] },
  { group: "Frontend", items: ["React", "Next.js"] },
  { group: "DevOps & Tooling", items: ["Docker", "Docker Compose", "Git", "GitHub Actions (CI/CD)", "pytest", "JUnit", "Alembic"] },
  { group: "Cloud", items: ["AWS (SNS, Lambda)", "Render", "Vercel"] },
  { group: "Practices", items: ["Agile/Scrum", "Jira", "Confluence", "Trello"] },
];

export const COURSES = [
  "Data Structures & Algorithms",
  "Object-Oriented Design",
  "Database Systems",
  "Software Engineering",
  "Human-Computer Interaction",
];

export const METRICS = [
  { n: "2", l: "production sites shipped end-to-end as sole developer" },
  { n: "2.8×", l: "more robust retrieval than a BM25 baseline on a paraphrased eval set" },
  { n: "20→0", l: "concurrency failures after fixing a race condition with atomic Lua" },
];

export const HERO_LINKS = [
  { key: "gh", label: "GitHub", tag: "01", href: GITHUB_URL, preview: "adityaT39 — RAG Evaluation Pipeline, Rate Limiter Lab and the rest of the source." },
  { key: "li", label: "LinkedIn", tag: "02", href: LINKEDIN_URL, preview: "Full history, recommendations and the Onpoint Consulting NZ contract." },
  { key: "cv", label: "Resume PDF", tag: "03", href: RESUME_URL, preview: "One-page PDF, same content as this site — for ATS submissions." },
];

export const STATUS = "Open to Junior Full Stack Software Engineer roles in Vancouver / Burnaby or remote. Email is the fastest way to reach me.";
