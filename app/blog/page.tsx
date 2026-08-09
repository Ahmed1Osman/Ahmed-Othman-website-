'use client';

import { useState, useEffect } from 'react';
import { Calendar, ArrowRight, ExternalLink } from 'lucide-react';
import Container from '@/components/Container';

interface BlogPost {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  thumbnail: string;
  categories: string[];
}

interface RssItem {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  thumbnail?: string;
  categories?: string[];
}

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMediumPosts = async () => {
      try {
        const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@ao9200004');
        const data = await response.json();
        if (data.items) {
          const formatted = data.items.map((item: RssItem) => ({
            title: item.title,
            link: item.link,
            pubDate: new Date(item.pubDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
            description: item.description.replace(/<[^>]*>/g, '').substring(0, 180) + '...',
            thumbnail: item.thumbnail || '',
            categories: item.categories || [],
          }));
          setPosts(formatted);
        }
      } catch (error) {
        console.error('Error fetching Medium posts:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchMediumPosts();
  }, []);

  return (
    <Container className="py-24">
      <span className="eyebrow">Writing</span>
      <h1 className="mt-3 text-4xl sm:text-5xl font-semibold text-ink tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
        Blog
      </h1>
      <a
        href="https://medium.com/@ao9200004"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all"
      >
        Follow on Medium <ExternalLink size={16} />
      </a>

      {loading ? (
        <div className="mt-16 text-center py-16">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-2 border-line border-t-accent" />
          <p className="mt-4 text-sm text-muted" style={{ fontFamily: 'var(--font-mono)' }}>loading articles…</p>
        </div>
      ) : posts.length === 0 ? (
        <div className="mt-16 border border-dashed border-line rounded-lg p-14 text-center">
          <p className="text-muted">No articles loaded yet.</p>
          <a
            href="https://medium.com/@ao9200004"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-bg font-semibold rounded-md text-sm"
          >
            Visit Medium profile <ExternalLink size={14} />
          </a>
        </div>
      ) : (
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <a
              key={i}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-line rounded-lg overflow-hidden bg-surface hover:border-faint transition-colors"
            >
              {post.thumbnail && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={post.thumbnail} alt={post.title} className="w-full h-40 object-cover" />
              )}
              <div className="p-5">
                <div className="flex items-center gap-2 text-xs text-faint" style={{ fontFamily: 'var(--font-mono)' }}>
                  <Calendar size={13} /> {post.pubDate}
                </div>
                <h3 className="mt-3 font-semibold text-ink group-hover:text-accent transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-muted line-clamp-3">{post.description}</p>
                <div className="mt-4 inline-flex items-center gap-1 text-sm text-accent">
                  Read <ArrowRight size={14} />
                </div>
              </div>
            </a>
          ))}
        </div>
      )}
    </Container>
  );
}
