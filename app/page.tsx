import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Hero from '@/components/Hero';
import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/lib/data/projects';
import { skillGroups } from '@/lib/data/skills';

export default function Home() {
  const featured = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <>
      <Hero />

      {/* What I build */}
      <section className="border-b border-line">
        <Container className="py-24">
          <SectionHeading
            eyebrow="What I build"
            title="Production AI systems, not demos."
            description="LLM applications, retrieval pipelines, and agentic systems that run in real deployments — with the backend, cloud, and CI/CD work that makes them actually ship."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line border border-line rounded-lg overflow-hidden">
            {[
              { label: 'LLM Applications', desc: 'Fine-tuning, evaluation, and deployment of production LLMs.' },
              { label: 'RAG Systems', desc: 'Hybrid retrieval, reranking, and RAGAS-evaluated accuracy.' },
              { label: 'Agentic AI', desc: 'LangGraph orchestration, MCP tool use, persistent memory.' },
              { label: 'Backend & Cloud', desc: 'FastAPI services on AWS, containerized and CI/CD-deployed.' },
            ].map((item) => (
              <div key={item.label} className="bg-bg p-6">
                <h3 className="font-semibold text-ink" style={{ fontFamily: 'var(--font-display)' }}>
                  {item.label}
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured projects */}
      <section className="border-b border-line">
        <Container className="py-24">
          <div className="flex items-end justify-between mb-14 flex-wrap gap-4">
            <SectionHeading
              eyebrow="Selected work"
              title="Featured projects"
              description="A sample of systems I've designed and shipped — full breakdowns on each project page."
            />
            <Link
              href="/projects"
              className="inline-flex items-center gap-1 text-accent font-medium hover:gap-2 transition-all mb-14"
            >
              View all projects <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featured.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </Container>
      </section>

      {/* Stack */}
      <section>
        <Container className="py-24">
          <SectionHeading eyebrow="Stack" title="Technologies I work with daily" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillGroups.map((group) => (
              <div key={group.category}>
                <h3 className="text-sm font-semibold text-accent" style={{ fontFamily: 'var(--font-mono)' }}>
                  {group.category}
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{group.items.join(' · ')}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
