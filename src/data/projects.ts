import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: "1",
    title: "AI SaaS Dashboard",
    description:
      "A modern AI-powered SaaS dashboard with analytics, authentication, and subscription management.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    techStack: ["Next.js", "TypeScript", "Tailwind", "Stripe", "Prisma"],
    liveUrl: "https://your-ai-saas.vercel.app",
    githubUrl: "https://github.com/yourusername/ai-saas-dashboard",
  },
  {
    id: "2",
    title: "E-commerce Store",
    description:
      "Full-featured e-commerce app with product filtering, cart system, and secure checkout.",
    image: "https://images.unsplash.com/photo-1515169067868-5387ec356754",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    liveUrl: "https://your-store.vercel.app",
    githubUrl: "https://github.com/yourusername/ecommerce-store",
  },
  {
    id: "3",
    title: "Real-time Chat App",
    description:
      "Scalable real-time messaging app with rooms, typing indicators, and notifications.",
    image: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28",
    techStack: ["React", "Socket.io", "Node.js", "Redis"],
    liveUrl: "https://your-chat-app.vercel.app",
    githubUrl: "https://github.com/yourusername/chat-app",
  },
  {
    id: "4",
    title: "Task Management App",
    description:
      "Kanban-style task manager with drag-and-drop, deadlines, and team collaboration.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71",
    techStack: ["Next.js", "TypeScript", "Tailwind", "Firebase"],
    liveUrl: "https://your-task-app.vercel.app",
    githubUrl: "https://github.com/yourusername/task-manager",
  },
  {
    id: "5",
    title: "Developer Blog Platform",
    description:
      "Markdown-powered blog platform with SEO optimization and authentication.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    techStack: ["Next.js", "MDX", "Prisma", "PostgreSQL"],
    liveUrl: "https://your-blog.vercel.app",
    githubUrl: "https://github.com/yourusername/dev-blog",
  },
];