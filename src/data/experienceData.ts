import type { Experience } from "../components/about/ExperienceCard";

export const experienceData: Experience[] = [
  {
    company: "8Bit System Pvt Ltd",
    role: "Java Developer",
    location: "Jaipur",
    duration: "Jan 2024 – Present",
    status: "current",
    description:
      "Gained hands-on experience in frontend development and modern frameworks.",
    responsibilities: [
      "Assisted in developing UI components using React",
      "Learned state management and API integration",
      "Participated in daily standups and sprint planning",
    ],
    technologies: ["React", "JavaScript", "CSS"],
  },
  {
    company: "Freelance",
    role: "React Developer",
    location: "Remote",
    duration: "2023 – Present",
    status: "current",
    description: "Delivered multiple freelance projects for clients globally.",
    responsibilities: [
      "Built custom portfolio and business websites",
      "Integrated third-party APIs and payment gateways",
      "Ensured mobile-first responsive design",
      "Communicated directly with clients for requirement gathering",
    ],
    technologies: ["React", "Tailwind CSS", "Firebase", "Stripe"],
  },
  {
    company: "Infosys",
    role: "Web Developer",
    location: "Pune, India",
    duration: "July 2022 – Dec 2023",
    status: "completed",
    description:
      "Built and maintained responsive web applications for client projects.",
    responsibilities: [
      "Created responsive UI using HTML, CSS, and JavaScript",
      "Fixed UI/UX bugs and improved accessibility",
      "Worked closely with QA team to ensure bug-free releases",
      "Maintained code quality using ESLint and best practices",
    ],
    technologies: ["JavaScript", "HTML", "CSS", "Bootstrap"],
  },
];
