import type { Metadata } from "next";
import Container from "@/components/Container";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects",
  description: "A selection of projects built by Jassim Bashir.",
};

export default function ProjectsPage() {
  return (
    <Container>
      <div className="py-16">
        <h1 className="text-3xl font-bold mb-2">Projects</h1>
        <p className="text-gray-600 mb-8">
          A selection of things I&apos;ve built while learning full-stack
          development.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </Container>
  );
}
