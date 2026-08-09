import type { Metadata } from 'next';
import Link from 'next/link';
import { Workflow, ArrowRight } from 'lucide-react';
import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';
import { automationSystems, automationStack } from '@/lib/data/automation';

export const metadata: Metadata = {
  title: 'AI Automation Systems',
  description:
    'Business automation systems built with n8n and LLMs — lead gen, CRM, document processing, and workflow automation.',
};

export default function Automation() {
  return (
    <Container>
      {/* Header */}
      <div>
        <p className="text-sm text-accent font-medium">AI Automation</p>

        <h1
          className="mt-3 text-4xl sm:text-5xl font-semibold text-ink tracking-tight max-w-3xl"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          AI automation systems
        </h1>

        <p className="mt-4 text-muted max-w-2xl leading-relaxed">
          I build workflow automation that connects LLMs to the tools a business already uses —
          n8n, Make, and Zapier orchestrating APIs, LLM calls, and integrations end to end.
          These systems solve real operational problems, not just demos.
        </p>
      </div>

      {/* Stack */}
      <div className="mt-12 flex flex-wrap gap-2">
        {automationStack.map((t) => (
          <span
            key={t}
            className="text-xs px-2.5 py-1.5 rounded border border-line text-muted"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            {t}
          </span>
        ))}
      </div>

      {/* Systems */}
      <div className="mt-16">
        {automationSystems.length === 0 ? (
          <div className="border border-dashed border-line rounded-lg p-14 text-center">
            <Workflow size={28} className="mx-auto text-faint" />

            <h2
              className="mt-4 font-semibold text-ink"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Case studies in progress
            </h2>

            <p className="mt-2 text-sm text-muted max-w-md mx-auto leading-relaxed">
              Specific automation systems will appear here once documented.
            </p>

            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-1 text-accent font-medium hover:gap-2 transition-all"
            >
              Ask about a custom build <ArrowRight size={16} />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {automationSystems.map((sys) => (
              <Link
                href={`/automation/${sys.slug}`}
                key={sys.slug}
                className="border border-line rounded-lg p-6 bg-surface block hover:border-accent transition"
              >
                <h3
                  className="font-semibold text-ink"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {sys.name}
                </h3>

                <p className="mt-2 text-sm text-muted">
                  {sys.businessProblem}
                </p>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Process */}
      <div className="mt-20 border-t border-line pt-12">
        <SectionHeading
          eyebrow="How I build these"
          title="Business problem → working system"
          description="Every automation follows: trigger → AI → integrations → result."
        />

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-px bg-line border border-line rounded-lg overflow-hidden">
          {[
            {
              step: 'Trigger',
              desc: 'Webhook, schedule, form submit, or inbound message.',
            },
            {
              step: 'AI processing',
              desc: 'LLM call — extraction, classification, generation.',
            },
            {
              step: 'Integrations',
              desc: 'Sheets, Gmail, Telegram, CRM, APIs.',
            },
            {
              step: 'Result',
              desc: 'A real output — task, reply, record, or report.',
            },
          ].map((s) => (
            <div key={s.step} className="bg-bg p-6">
              <p
                className="text-sm font-semibold text-accent"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                {s.step}
              </p>

              <p className="mt-2 text-sm text-muted leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}