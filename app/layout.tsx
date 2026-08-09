import type { Metadata } from 'next';
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-display-family', display: 'swap' });
const inter = Inter({ subsets: ['latin'], variable: '--font-body-family', display: 'swap' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono-family', display: 'swap' });

const siteUrl = 'https://ahmedothman.dev'; // TODO: replace with your real domain once you have one

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Ahmed Othman — AI Engineer (LLM Systems, RAG, Agentic AI)',
    template: '%s — Ahmed Othman',
  },
  description:
    'Ahmed Othman is an AI Engineer building production LLM systems, RAG pipelines, and agentic AI — with a focus on Arabic NLP, backend engineering, and AWS infrastructure.',
  keywords: [
    'Ahmed Othman',
    'AI Engineer',
    'AI Engineer Egypt',
    'LLM Engineer',
    'Generative AI Engineer',
    'Agentic AI Engineer',
    'RAG Engineer',
    'AI Automation Engineer',
    'Arabic NLP Engineer',
  ],
  openGraph: {
    title: 'Ahmed Othman — AI Engineer',
    description:
      'Production LLM systems, RAG pipelines, and agentic AI — with a focus on Arabic NLP and backend engineering.',
    url: siteUrl,
    siteName: 'Ahmed Othman',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ahmed Othman — AI Engineer',
    description: 'Production LLM systems, RAG pipelines, and agentic AI.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased min-h-screen bg-bg text-ink">
        <Navbar />
        <main className="min-h-screen w-full">{children}</main>
        <footer className="border-t border-line">
          <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-faint" style={{ fontFamily: 'var(--font-mono)' }}>
              © {new Date().getFullYear()} Ahmed Othman
            </p>
            <div className="flex gap-6 text-sm text-muted">
              <a href="https://www.linkedin.com/in/ahmed-othman-a38805232/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                LinkedIn
              </a>
              <a href="https://github.com/Ahmed1Osman" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                GitHub
              </a>
              <a href="mailto:ahmedothman1752@gmail.com" className="hover:text-accent transition-colors">
                Email
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
