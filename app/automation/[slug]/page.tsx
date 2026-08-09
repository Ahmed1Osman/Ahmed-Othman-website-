'use client';

import { motion } from 'framer-motion';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Container from '@/components/Container';
import { automationSystems } from '@/lib/data/automation';

type Params = { slug: string };

export default async function AutomationDetail({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;

  const system = automationSystems.find((s) => s.slug === slug);
  if (!system) return notFound();

  return (
    <Container>
      {/* HERO */}
      <section className="max-w-4xl">
        <p className="eyebrow">Automation System</p>

        <h1 className="mt-4 text-5xl font-semibold tracking-tight">
          {system.name}
        </h1>

        <p className="mt-6 text-lg text-muted max-w-2xl leading-relaxed">
          {system.businessProblem}
        </p>
      </section>

      {/* VISUAL STRIP */}
      <div className="mt-12 h-40 rounded-xl bg-gradient-to-r from-accent/20 to-transparent border border-line flex items-center justify-center text-faint">
        System workflow visualization
      </div>

      {/* FLOW (THIS IS THE BIG FIX) */}
      <section className="mt-20">
        <h2 className="text-2xl font-semibold">How it works</h2>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'Input',
              desc: system.workflow,
            },
            {
              title: 'AI Processing',
              desc: system.aiProcessing,
            },
            {
              title: 'Output',
              desc: system.result,
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="p-6 rounded-xl border border-line bg-surface hover:bg-surface-hover transition"
            >
              <p className="text-sm text-accent font-mono">
                {item.title}
              </p>

              <p className="mt-3 text-sm text-muted leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* INTEGRATIONS (MAKE IT SEXY) */}
      <section className="mt-20">
        <h2 className="text-2xl font-semibold">Integrations</h2>

        <div className="mt-6 flex flex-wrap gap-3">
          {system.integrations.map((tool, i) => (
            <motion.div
              key={tool}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className="px-4 py-2 rounded-lg bg-surface border border-line text-sm text-muted hover:border-accent transition"
            >
              {tool}
            </motion.div>
          ))}
        </div>
      </section>

      {/* SCREENSHOT (CLEAN) */}
      {system.screenshots?.length > 0 && (
        <section className="mt-20">
          <h2 className="text-2xl font-semibold">Preview</h2>

          <div className="mt-6 rounded-xl overflow-hidden border border-line">
            <img
              src={system.screenshots[0]}
              className="w-full object-cover"
              alt=""
            />
          </div>
        </section>
      )}

      {/* CTA (THIS IS CRITICAL) */}
      <section className="mt-28 text-center">
        <div className="border border-line rounded-xl p-10 bg-surface">
          <h2 className="text-2xl font-semibold">
            Want this in your business?
          </h2>

          <p className="mt-3 text-muted">
            I design and build automation systems tailored to your workflows.
          </p>

          <Link
            href="/contact"
            className="mt-6 inline-block px-6 py-3 rounded-lg bg-accent text-black font-medium hover:opacity-90 transition"
          >
            Request this system
          </Link>
        </div>
      </section>
    </Container>
  );
}