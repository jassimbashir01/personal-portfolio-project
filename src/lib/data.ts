export type Project = {
  slug: string;
  title: string;
  description: string;
  content: string[];
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "project-1",
    title: "Personal Portfolio Project",
    description:
      "A full-stack developer portfolio built from scratch with Next.js, TypeScript and Tailwind CSS.",
    content: [
      "This portfolio website is my first production-style project, built using the Next.js App Router architecture. It leverages Server Components for efficient rendering of data-heavy sections and client components only where interactivity is required.",

      "The project focuses on modern frontend architecture and includes a well-structured routing system, shared layout hierarchy and dynamic pages. Styling is implemented with Tailwind CSS to ensure a consistent, responsive design system across all breakpoints.",

      "It also demonstrates practical implementation of SEO best practices using Next.js metadata API, along with mobile-first responsive design principles and clean component composition.",
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    githubUrl: "https://github.com/jassimbashir01/portfolio",
    liveUrl: "https://jassimbashir.com",
  },
  {
    slug: "project-2",
    title: "Personal Portfolio Project",
    description:
      "A full-stack developer portfolio built from scratch with Next.js, TypeScript and Tailwind CSS.",
    content: [
      "This portfolio website is my first production-style project, built using the Next.js App Router architecture. It leverages Server Components for efficient rendering of data-heavy sections and client components only where interactivity is required.",

      "The project focuses on modern frontend architecture and includes a well-structured routing system, shared layout hierarchy and dynamic pages. Styling is implemented with Tailwind CSS to ensure a consistent, responsive design system across all breakpoints.",

      "It also demonstrates practical implementation of SEO best practices using Next.js metadata API, along with mobile-first responsive design principles and clean component composition.",
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    githubUrl: "https://github.com/jassimbashir01/portfolio",
    liveUrl: "https://jassimbashir.com",
  },
  {
    slug: "project-3",
    title: "Personal Portfolio Project",
    description:
      "A full-stack developer portfolio built from scratch with Next.js, TypeScript and Tailwind CSS.",
    content: [
      "This portfolio website is my first production-style project, built using the Next.js App Router architecture. It leverages Server Components for efficient rendering of data-heavy sections and client components only where interactivity is required.",

      "The project focuses on modern frontend architecture and includes a well-structured routing system, shared layout hierarchy and dynamic pages. Styling is implemented with Tailwind CSS to ensure a consistent, responsive design system across all breakpoints.",

      "It also demonstrates practical implementation of SEO best practices using Next.js metadata API, along with mobile-first responsive design principles and clean component composition.",
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    githubUrl: "https://github.com/jassimbashir01/portfolio",
    liveUrl: "https://jassimbashir.com",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
