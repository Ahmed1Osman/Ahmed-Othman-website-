import type { Metadata } from 'next';
import Container from '@/components/Container';
import { education, certifications } from '@/lib/data/experience';

export const metadata: Metadata = {
  title: 'About',
  description: 'AI Engineer focused on LLMs, RAG, agentic AI, and Arabic NLP — background, education, and how I work.',
};

export default function About() {
  return (
    <Container className="py-24">
      <div className="flex items-start gap-6 flex-wrap">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/ahmed-othman-ai-engineer.jpg"
          alt="Ahmed Othman, AI Engineer"
          className="w-20 h-20 rounded-full object-cover border border-line shrink-0"
        />
        <div>
          <span className="eyebrow">About</span>
          <h1
            className="mt-3 text-4xl sm:text-5xl font-semibold text-ink tracking-tight max-w-3xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            I build the systems behind the AI product, not just the demo.
          </h1>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-6 text-muted leading-relaxed">
          <p>
            I&apos;m an AI Engineer with 2+ years of experience building and shipping production-grade
            LLM systems, RAG pipelines, and multi-agent applications — deployed in healthcare and
            government infrastructure across Egypt.
          </p>
          <p>
            My focus is agentic AI: LangGraph orchestration, MCP-based tool integration, persistent
            memory systems, and multimodal pipelines that combine voice, vision, and document
            understanding. Across the systems I&apos;ve built and evaluated, I&apos;ve measured accuracy
            improvements ranging from roughly 35% to 90%+, depending on the task — the specifics
            are broken down on each project page rather than compressed into one headline number.
          </p>
          <p>
            A large part of my work is in Arabic NLP — training, evaluating, and deploying Arabic
            LLMs, including a medical-reasoning model benchmarked against 18 others. It&apos;s an
            underserved area: most tooling, evaluation sets, and production patterns are built
            English-first, so a lot of the work is adapting or building that infrastructure from
            scratch.
          </p>
          <p>
            Day to day, that means Python and FastAPI on the backend, PostgreSQL and Redis for
            storage, Docker and GitHub Actions for shipping, and AWS (Bedrock, Lambda, ECS, S3,
            and friends) for infrastructure. I also teach — AI, automation, and data analysis — which
            keeps me explaining these systems clearly, not just building them.
          </p>
        </div>

        <div className="space-y-8">
          <div className="border border-line rounded-lg p-6 bg-surface">
            <h3 className="eyebrow">Education</h3>
            <p className="mt-3 font-semibold text-ink" style={{ fontFamily: 'var(--font-display)' }}>
              {education.degree}
            </p>
            <p className="text-sm text-muted mt-1">{education.school} · {education.period}</p>
            <p className="text-sm text-faint mt-1">{education.grade}</p>

            <div className="mt-5 pt-5 border-t border-line">
              <p className="text-sm font-semibold text-ink">{education.gradProject.name}</p>
              <p className="text-xs text-faint mt-1" style={{ fontFamily: 'var(--font-mono)' }}>
                {education.gradProject.date}
              </p>
              <p className="mt-3 text-sm text-muted leading-relaxed">{education.gradProject.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {education.gradProject.tech.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded border border-line text-muted" style={{ fontFamily: 'var(--font-mono)' }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="border border-line rounded-lg p-6 bg-surface">
            <h3 className="eyebrow">Certifications</h3>
            <ul className="mt-3 space-y-2">
              {certifications.map((c) => (
                <li key={c} className="text-sm text-muted flex gap-2">
                  <span className="text-accent">·</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
}
