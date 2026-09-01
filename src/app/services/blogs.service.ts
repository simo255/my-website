import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Blog } from '../interface/blog.model';
import fm from 'front-matter';

export function formatBlogDate(iso: string): string {
  const d = new Date(`${iso}T00:00:00`);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

@Injectable({ providedIn: 'root' })
export class BlogService {
  private blogSlugs = ['ai-is-making-us-lazy', 'cc', 'investing-beginner'];

  constructor(private http: HttpClient) {}

  async getAll(): Promise<Blog[]> {
    const blogs: Blog[] = [];

    for (const slug of this.blogSlugs) {
      const blog = await this.getBySlug(slug);
      if (blog) blogs.push(blog);
    }

    return blogs.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }

  async getBySlug(slug: string): Promise<Blog | null> {
    try {
      const markdown = await this.http
        .get(`assets/blogs/${slug}.md`, { responseType: 'text' })
        .toPromise();
      const parsed = fm<any>(markdown || '');
      const attributes = parsed.attributes || {};
      const title = attributes.title || slug;
      let body = (parsed.body || '').trim();

      body = body.replace(
        new RegExp(`^#\\s+${escapeRegExp(title)}\\s*\\n+`, 'i'),
        ''
      );

      const excerptRaw = body
        .split('\n')
        .map((line) => line.trim())
        .filter((line) => line && !line.startsWith('#') && !line.startsWith('---'))
        .join(' ')
        .replace(/[*_`]/g, '')
        .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
        .slice(0, 220)
        .trim();

      const excerpt = excerptRaw
        ? excerptRaw.endsWith('.')
          ? excerptRaw
          : `${excerptRaw}.`
        : '';

      return {
        title,
        slug,
        date: attributes.date ? String(attributes.date) : '',
        coverImage: attributes.coverImage || '',
        tags: Array.isArray(attributes.tags)
          ? attributes.tags
          : attributes.tags
          ? String(attributes.tags)
              .split(',')
              .map((t: string) => t.trim())
          : [],
        excerpt,
        content: body,
      };
    } catch (e) {
      console.error('Blog not found:', slug, e);
      return null;
    }
  }

  formatDate(iso: string): string {
    return formatBlogDate(iso);
  }
}
