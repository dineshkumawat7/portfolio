import type { Skill } from "../types/skills.types";

export const skillsData: Skill[] = [
  {
    id: "c1",
    name: "React",
    category: "Frontend",
    proficiency: "Expert",
    icon: "⚛️",
    yearsOfExperience: 5,
    description:
      "Component architecture, hooks, context, performance tuning, and large-scale SPA delivery. Component architecture, hooks, context, performance tuning, and large-scale SPA delivery.",
    tags: ["Frontend", "UI", "Hooks", "JSX"],
  },
  {
    id: "c2",
    name: "TypeScript",
    category: "Backend",
    proficiency: "Expert",
    icon: "🔷",
    yearsOfExperience: 4,
    description:
      "Strict typing, generics, utility types, declaration files, and type-safe API contracts.",
    tags: ["Typing", "JavaScript", "Generics"],
  },
  {
    id: "c3",
    name: "Next.js",
    category: "Backend",
    proficiency: "Expert",
    icon: "▲",
    yearsOfExperience: 3,
    description:
      "App Router, SSR, ISR, server components, route handlers, and full-stack deployments.",
    tags: ["SSR", "Full-Stack", "App Router"],
  },
  {
    id: "c4",
    name: "Node.js",
    category: "Backend",
    proficiency: "Advanced",
    icon: "🟩",
    yearsOfExperience: 4,
    description:
      "REST and GraphQL APIs, event-driven architecture, streams, and microservice design.",
    tags: ["Backend", "API", "Microservices"],
  },
  {
    id: "c5",
    name: "Python",
    category: "Backend",
    proficiency: "Advanced",
    icon: "🐍",
    yearsOfExperience: 3,
    description:
      "FastAPI services, data pipelines, scripting, and lightweight ML model integration.",
    tags: ["Backend", "Scripting", "FastAPI"],
  },
  {
    id: "c6",
    name: "PostgreSQL",
    category: "Database",
    proficiency: "Advanced",
    icon: "🐘",
    yearsOfExperience: 4,
    description:
      "Schema design, complex joins, window functions, indexing strategies, and query optimisation.",
    tags: ["Database", "SQL", "Performance"],
  },
  {
    id: "c7",
    name: "GraphQL",
    category: "Backend",
    proficiency: "Advanced",
    icon: "◈",
    yearsOfExperience: 3,
    description:
      "Schema-first design, resolvers, DataLoader batching, subscriptions, and Apollo Client.",
    tags: ["API", "Apollo", "Schema"],
  },
  {
    id: "c8",
    name: "Tailwind CSS",
    category: "Frontend",
    proficiency: "Expert",
    icon: "🎐",
    yearsOfExperience: 3,
    description:
      "Utility-first styling, design tokens, custom plugins, and component system extraction.",
    tags: ["CSS", "Design System", "UI"],
  },
  {
    id: "c9",
    name: "Redis",
    category: "Database",
    proficiency: "Intermediate",
    icon: "🔴",
    yearsOfExperience: 2,
    description:
      "Caching layers, pub/sub messaging, rate limiting, and session storage patterns.",
    tags: ["Cache", "Pub/Sub", "Performance"],
  },

  // ── PLAN ──────────────────────────────────────────────────────────────────
  {
    id: "p1",
    name: "System Design",
    category: "Other",
    proficiency: "Advanced",
    icon: "🏗️",
    yearsOfExperience: 4,
    description:
      "Designing scalable distributed systems, event-driven pipelines, and data-flow architecture.",
    tags: ["Architecture", "Distributed", "Scale"],
  },
  {
    id: "p2",
    name: "Agile / Scrum",
    category: "Backend",
    proficiency: "Expert",
    icon: "🔄",
    yearsOfExperience: 5,
    description:
      "Running sprints, backlog grooming, retros, and velocity forecasting across cross-functional teams.",
    tags: ["Scrum", "Sprints", "Delivery"],
  },
  {
    id: "p3",
    name: "Technical Writing",
    category: "Backend",
    proficiency: "Advanced",
    icon: "📝",
    yearsOfExperience: 4,
    description:
      "RFCs, ADRs, runbooks, API docs, and onboarding guides that teams actually read.",
    tags: ["RFCs", "ADRs", "Docs"],
  },
  {
    id: "p4",
    name: "Product Roadmapping",
    category: "Backend",
    proficiency: "Advanced",
    icon: "🗺️",
    yearsOfExperience: 3,
    description:
      "Translating business goals into OKRs, epics, and phased delivery milestones.",
    tags: ["OKRs", "Strategy", "Prioritisation"],
  },
  {
    id: "p5",
    name: "API Design",
    category: "Backend",
    proficiency: "Expert",
    icon: "📐",
    yearsOfExperience: 5,
    description:
      "RESTful conventions, versioning, pagination, error standards, and OpenAPI specs.",
    tags: ["REST", "OpenAPI", "Standards"],
  },
];
