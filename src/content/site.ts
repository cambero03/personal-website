export type Project = {
  title: string;
  description: string;
  url: string;
};

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  bullets: string[];
};

export type SiteConfig = {
  name: string;
  tagline: string;
  bio: string;
  email: string;
  url?: string; // your canonical site URL when deployed
  resumeUrl?: string; // e.g. "/resume.pdf" or an external URL
  headshot?: string; // path in public/ e.g. "/headshot.jpg"
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
  projects: Project[];
  experience: ExperienceItem[];
};

export const site: SiteConfig = {
  name: "Cristian García",
  tagline: "Software Engineer • Web + UX",
  bio:
    "I build performant, delightful web experiences with modern technologies like Next.js, TypeScript, and Tailwind CSS.",
  email: "hello@yourdomain.com",
  url: undefined, // set to e.g. "https://cristiangarcia.dev" when deploying
  resumeUrl: "/resume.pdf",
  headshot: undefined, // put an image in public/ and set e.g. "/headshot.jpg"
  social: {
    github: "https://github.com/",
    linkedin: "https://linkedin.com/in/",
    twitter: undefined,
  },
  projects: [
    {
      title: "Project One",
      description: "A performant web app showcasing real-time data visualization.",
      url: "#",
    },
    {
      title: "Project Two",
      description: "A sleek marketing site with CMS-driven content.",
      url: "#",
    },
    {
      title: "Project Three",
      description: "Design system and component library built with Tailwind.",
      url: "#",
    },
  ],
  experience: [
    {
      role: "Senior Software Engineer",
      company: "Acme Corp",
      period: "2023 — Present",
      bullets: [
        "Led migration to Next.js app router with significant performance gains.",
        "Built internal UI component library used across 5 teams.",
      ],
    },
    {
      role: "Frontend Engineer",
      company: "Beta Labs",
      period: "2021 — 2023",
      bullets: ["Shipped analytics dashboards and design systems."],
    },
  ],
};
