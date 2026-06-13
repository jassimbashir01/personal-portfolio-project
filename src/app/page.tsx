import Link from "next/link";
import Container from "@/components/Container";
import Button from "@/components/Button";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/data";

export default function HomePage() {
  const featured = projects.slice(0, 3);

  return (
    <div className="flex-1 flex">
      <Container className="flex-1">
        <div className="h-full flex flex-col justify-evenly">
          <section className="text-center">
            <p className="text-sm font-medium text-gray-500 mb-3 mt-6">
              Hi, my name is
            </p>

            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              Jassim Bashir
            </h1>

            <p className="text-lg text-gray-600 max-w-xl mx-auto mb-8">
              I&apos;m a Full-stack developer building modern web applications
              from concept to deployment, focused on performance, scalability
              and great user experience.
            </p>

            <div className="flex gap-3 justify-center">
              <Button href="/projects">View my projects</Button>
              <Button href="/contact" variant="secondary">
                Get in touch
              </Button>
            </div>
          </section>

          <section>
            <div className="flex justify-between items-baseline mb-6 mt-12">
              <h2 className="text-2xl font-bold">Featured projects</h2>

              <Link
                href="/projects"
                className="text-sm font-medium text-gray-600 hover:text-gray-900"
              >
                View all →
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {featured.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
}
