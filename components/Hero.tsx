'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Container from './Container';

const stats = [
  { label: 'MedAraBench rank', value: '#8 / 18' },
  { label: 'RAG answer accuracy (RAGAS)', value: '90%+' },
  { label: 'Years shipping production AI', value: '2+' },
];

export default function Hero() {
  return (
    <section className="relative border-b border-line">
      <Container className="py-24 lg:py-32">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/ahmed-othman-ai-engineer.jpg"
            alt="Ahmed Othman, AI Engineer"
            width={96}
            height={96}
            className="w-24 h-24 rounded-full object-cover border border-line mb-6"
          />
          <div className="flex items-center gap-2 mb-6">
            <span className="status-dot" />
            <span className="eyebrow">Available for select freelance & full-time roles</span>
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-ink leading-[1.1] max-w-3xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            AI Engineer building production LLM, RAG, and agentic systems.
          </h1>

          <p className="mt-6 text-lg text-muted max-w-2xl leading-relaxed">
            I design and ship LLM applications, retrieval pipelines, and multi-agent systems —
            deployed in healthcare and government infrastructure across Egypt. Backend-first:
            FastAPI, AWS, and Docker under everything. Strong focus on Arabic NLP, where
            production-grade tooling is still rare.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-5 py-3 bg-accent text-bg font-semibold rounded-md hover:opacity-90 transition-opacity"
            >
              View projects <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-3 border border-line text-ink font-semibold rounded-md hover:border-faint transition-colors"
            >
              Get in touch
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-px bg-line border border-line rounded-lg overflow-hidden"
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-bg p-6">
              <div className="text-3xl font-semibold text-accent" style={{ fontFamily: 'var(--font-mono)' }}>
                {s.value}
              </div>
              <div className="mt-1 text-sm text-muted">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
