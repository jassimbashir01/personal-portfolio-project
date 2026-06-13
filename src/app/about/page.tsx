import type { Metadata } from "next";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Jassim Bashir's background, skills and experience.",
};

export default function AboutPage() {
  return (
    <Container>
      <div className="py-16 max-w-2xl">
        <h1 className="text-3xl font-bold mb-6">About me</h1>

        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            I&apos;m a Full-Stack Developer and SaaS Engineer focused on
            building scalable, production-ready web applications and AI-powered
            systems using modern TypeScript-based technologies.
          </p>

          <p>
            My journey started with a strong curiosity for programming and
            evolved into a focus on software engineering and real-world product
            development. Today, I specialize in building full-stack SaaS
            platforms with clean architecture, performance and scalability in
            mind.
          </p>

          <p>
            I work primarily with Next.js, React and TypeScript, alongside tools
            like PostgreSQL with Drizzle ORM, Clerk for authentication, Stripe
            for payments, Zod for validation and Tailwind CSS with Shadcn/ui for
            UI development. I also integrate AI systems using OpenAI and Claude
            APIs.
          </p>

          <p>
            I&apos;ve built SaaS-style applications featuring authentication
            systems, dashboards, CRUD workflows and subscription-based payment
            models. My focus is on turning ideas into functional,
            production-grade products with maintainable system design.
          </p>

          <p>
            Currently, I&apos;m focused on building SaaS products, improving
            system design skills and integrating AI capabilities into real-world
            applications. I&apos;m open to collaborating on SaaS, web platforms
            and AI-powered products.
          </p>
        </div>

        <h2 className="text-xl font-semibold mt-10 mb-4">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "TypeScript",
            "React",
            "Next.js",
            "Tailwind CSS",
            "Shadcn/ui",
            "Node.js",
            "PostgreSQL",
            "Neon",
            "Supabase",
            "Drizzle ORM",
            "Clerk",
            "Zod",
            "Stripe",
            "Git",
            "Github",
            "Vercel",
            "OpenAI",
            "Claude",
          ].map((skill) => (
            <span
              key={skill}
              className="text-sm bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </Container>
  );
}
