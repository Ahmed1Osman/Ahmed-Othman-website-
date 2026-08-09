import type { Metadata } from 'next';
import Container from '@/components/Container';
import { experience } from '@/lib/data/experience';

export const metadata: Metadata = {
  title: 'Experience',
  description: 'Professional experience across AI engineering, backend development, and technical instruction.',
};

export default function Experience() {
  return (
    <Container className="py-24">
      <span className="eyebrow">Career</span>
      <h1 className="mt-3 text-4xl sm:text-5xl font-semibold text-ink tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
        Experience
      </h1>

      <div className="mt-16 space-y-0">
        {experience.map((exp, i) => (
          <div key={exp.id} className={`grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 py-10 ${i !== 0 ? 'border-t border-line' : ''}`}>
            <div>
              <p className="text-sm font-medium text-ink" style={{ fontFamily: 'var(--font-mono)' }}>
                {exp.period}
              </p>
              <p className="mt-1 text-sm text-faint">{exp.commitment}</p>
              {exp.current && (
                <div className="mt-3 inline-flex items-center gap-1.5 text-xs text-signal">
                  <span className="status-dot" style={{ width: 6, height: 6 }} />
                  Current
                </div>
              )}
            </div>

            <div>
              <h2 className="text-xl font-semibold text-ink" style={{ fontFamily: 'var(--font-display)' }}>
                {exp.role}
              </h2>
              <p className="text-accent font-medium mt-1">{exp.company}</p>

              <ul className="mt-4 space-y-2">
                {exp.bullets.map((b, idx) => (
                  <li key={idx} className="text-muted leading-relaxed flex gap-2">
                    <span className="text-faint shrink-0">—</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {exp.tech.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded border border-line text-muted" style={{ fontFamily: 'var(--font-mono)' }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
