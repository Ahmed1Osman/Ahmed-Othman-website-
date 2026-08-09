import type { Metadata } from 'next';
import { Mail, Linkedin, Github, MapPin, Phone, Download } from 'lucide-react';
import Container from '@/components/Container';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch about full-time roles, freelance AI engineering work, or automation projects.',
};

const links = [
  { icon: Mail, label: 'ahmedothman1752@gmail.com', href: 'mailto:ahmedothman1752@gmail.com' },
  { icon: Phone, label: 'WhatsApp', href: 'https://wa.me/201090294387' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/ahmed-othman-a38805232/' },
  { icon: Github, label: 'GitHub', href: 'https://github.com/Ahmed1Osman' },
];

export default function Contact() {
  return (
    <Container className="py-24">
      <span className="eyebrow">Get in touch</span>
      <h1 className="mt-3 text-4xl sm:text-5xl font-semibold text-ink tracking-tight max-w-2xl" style={{ fontFamily: 'var(--font-display)' }}>
        Building something with LLMs, RAG, or automation? Let&apos;s talk.
      </h1>
      <p className="mt-4 text-muted max-w-xl leading-relaxed">
        Open to full-time AI engineering roles, freelance builds, and automation projects.
        Fastest way to reach me is email or WhatsApp.
      </p>

      <div className="mt-8">
        <a
          href="/cv.pdf"
          download
          className="inline-flex items-center gap-2 px-5 py-3 bg-accent text-bg font-semibold rounded-md hover:opacity-90 transition-opacity"
        >
          <Download size={16} /> Download CV
        </a>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target={l.href.startsWith('http') ? '_blank' : undefined}
            rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="flex items-center gap-3 border border-line rounded-lg p-5 bg-surface hover:border-accent hover:bg-surface-hover transition-colors"
          >
            <l.icon size={20} className="text-accent shrink-0" />
            <span className="text-ink font-medium">{l.label}</span>
          </a>
        ))}
        <div className="flex items-center gap-3 border border-line rounded-lg p-5 sm:col-span-2">
          <MapPin size={20} className="text-faint shrink-0" />
          <span className="text-muted">Cairo, Egypt · open to remote</span>
        </div>
      </div>
    </Container>
  );
}
