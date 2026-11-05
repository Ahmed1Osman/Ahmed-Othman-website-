import type { MetadataRoute } from 'next';
import { projects } from '@/lib/data/projects';
import { automationSystems } from '@/lib/data/automation';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://ahmed-othman-website.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPages = ['', '/about', '/projects', '/automation', '/experience', '/blog', '/contact'];
  return [
    ...staticPages.map((path) => ({
      url: `${siteUrl}${path}`,
      lastModified: now,
      priority: path === '' ? 1 : 0.7,
    })),
    ...projects.map((p) => ({ url: `${siteUrl}/projects/${p.slug}`, lastModified: now, priority: 0.6 })),
    ...automationSystems.map((a) => ({ url: `${siteUrl}/automation/${a.slug}`, lastModified: now, priority: 0.5 })),
  ];
}
