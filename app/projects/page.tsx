import type { Metadata } from 'next';
import Container from '@/components/Container';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/lib/data/projects';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'AI systems, RAG pipelines, agents, and backend platforms I have built and shipped.',
};

export default function Projects() {
  const categories = Array.from(new Set(projects.map((p) => p.category)));

  return (
    <Container className="py-24">
      <span className="eyebrow">Selected work</span>
      <h1 className="mt-3 text-4xl sm:text-5xl font-semibold text-ink tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
        Projects
      </h1>
      <p className="mt-4 text-muted max-w-2xl leading-relaxed">
        Real systems, not coursework demos. Each one links to a full breakdown — problem, approach,
        architecture, and results where I have them.
      </p>

      <div className="mt-16 space-y-16">
        {categories.map((cat) => (
          <div key={cat}>
            <h2 className="eyebrow mb-6">{cat}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.filter((p) => p.category === cat).map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
