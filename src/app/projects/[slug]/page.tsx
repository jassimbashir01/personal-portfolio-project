import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import Button from "@/components/Button";
import { projects, getProjectBySlug } from "@/lib/data";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) return {};

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <Container>
      <div className="py-16 max-w-2xl">
        <h1 className="text-3xl font-bold mb-3">{project.title}</h1>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="text-gray-700 leading-relaxed mb-8">
          {project.content.map((paragraph, i) => (
            <p key={i} className="mb-4 text-gray-700 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="flex gap-3">
          {project.githubUrl && (
            <Button href={project.githubUrl} variant="secondary" external>
              View code
            </Button>
          )}
          {project.liveUrl && (
            <Button href={project.liveUrl} external>
              Live demo
            </Button>
          )}
        </div>
      </div>
    </Container>
  );
}
