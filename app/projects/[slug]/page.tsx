import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import Container from '@/components/Container';
import { projects, getProjectBySlug } from '@/lib/data/projects';

// helper: extract real URL (in case you accidentally pass markdown-style links)
function extractUrl(url: string | null) {
  if (!url) return null;

  const match = url.match(/\((.*?)\)/); // extract from (url)
  return match ? match[1] : url;
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

// ✅ Next.js 16 async params
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;

  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: project.name,
    description: project.oneLiner,
  };
}

// ✅ Page
export default async function ProjectPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  const project = getProjectBySlug(slug);
  if (!project) return notFound();

  const demoUrl = extractUrl(project.demoUrl);
  const repoUrl = extractUrl(project.repoUrl);
  const caseStudyUrl = extractUrl(project.caseStudyUrl);

  return (
    <Container>
      {/* Back */}
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-sm text-muted hover:text-ink"
      >
        <ArrowLeft size={14} /> All projects
      </Link>

      {/* Header */}
      <div className="mt-8 flex items-start justify-between flex-wrap gap-6">
        <div>
          <span className="eyebrow">
            {project.category}
            {project.org ? ` · ${project.org}` : ''}
          </span>

          <h1
            className="mt-3 text-4xl sm:text-5xl font-semibold text-ink tracking-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {project.name}
          </h1>

          <p className="mt-4 text-lg text-muted max-w-2xl">
            {project.oneLiner}
          </p>
        </div>

        {/* Actions */}
        <div className="flex gap-3 flex-wrap">
          {demoUrl ? (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-bg font-semibold rounded-md text-sm"
            >
              Live demo <ExternalLink size={14} />
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 px-4 py-2 border border-line rounded-md text-sm text-faint">
              Demo coming soon
            </span>
          )}

          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-line rounded-md text-sm text-ink hover:border-faint"
            >
              Repo <ExternalLink size={14} />
            </a>
          )}

          {caseStudyUrl && (
            <a
              href={caseStudyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-line rounded-md text-sm text-ink hover:border-faint"
            >
              Case Study <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>

      {/* ✅ Screenshot (FIXED) */}
      {project.screenshots?.length > 0 && (
        <div className="mt-12 aspect-video border border-line rounded-lg overflow-hidden">
          <img
            src={project.screenshots[0]}
            alt={project.name}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Content */}
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-10">
          <section>
            <h2 className="eyebrow">Problem</h2>
            <p className="mt-3 text-muted leading-relaxed">
              {project.problem}
            </p>
          </section>

          <section>
            <h2 className="eyebrow">Solution</h2>
            <p className="mt-3 text-muted leading-relaxed">
              {project.solution}
            </p>
          </section>

          {project.architecture && (
            <section>
              <h2 className="eyebrow">Architecture</h2>
              <p
                className="mt-3 text-muted leading-relaxed"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.9rem',
                }}
              >
                {project.architecture}
              </p>
            </section>
          )}

          <section>
            <h2 className="eyebrow">My contribution</h2>
            <p className="mt-3 text-muted leading-relaxed">
              {project.contribution}
            </p>
          </section>

          {project.features?.length > 0 && (
            <section>
              <h2 className="eyebrow">Key features</h2>
              <ul className="mt-3 space-y-2">
                {project.features.map((f) => (
                  <li
                    key={f}
                    className="text-muted leading-relaxed flex gap-2"
                  >
                    <span className="text-accent shrink-0">—</span>
                    {f}
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {project.results?.length > 0 && (
            <div className="border border-line rounded-lg p-6 bg-surface">
              <h3 className="eyebrow">Results</h3>
              <ul className="mt-3 space-y-3">
                {project.results.map((r) => (
                  <li
                    key={r}
                    className="text-sm text-signal leading-relaxed"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="border border-line rounded-lg p-6 bg-surface">
            <h3 className="eyebrow">Tech</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-1 rounded border border-line text-muted"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}