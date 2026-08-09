import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '@/lib/data/projects';

const statusLabel: Record<Project['status'], string> = {
  production: 'In production',
  shipped: 'Shipped',
  academic: 'Academic project',
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block border border-line rounded-lg p-6 bg-surface hover:bg-surface-hover hover:border-faint transition-colors"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="eyebrow">{project.category}</span>
          <h3
            className="mt-2 text-xl font-semibold text-ink group-hover:text-accent transition-colors"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {project.name}
          </h3>
          {project.org && <p className="text-sm text-faint mt-0.5">{project.org}</p>}
        </div>
        <ArrowUpRight size={20} className="text-faint group-hover:text-accent transition-colors shrink-0" />
      </div>

      <p className="mt-4 text-muted leading-relaxed">{project.oneLiner}</p>

      {project.results.length > 0 && (
        <p className="mt-4 text-sm text-signal" style={{ fontFamily: 'var(--font-mono)' }}>
          {project.results[0]}
        </p>
      )}

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.slice(0, 5).map((t) => (
          <span
            key={t}
            className="text-xs px-2 py-1 rounded border border-line text-muted"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-5 text-xs text-faint" style={{ fontFamily: 'var(--font-mono)' }}>
        {statusLabel[project.status]}
      </div>
    </Link>
  );
}
