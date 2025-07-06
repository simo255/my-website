// blog.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Blog } from '../interface/blog.model';
import fm from 'front-matter';

@Injectable({ providedIn: 'root' })
export class BlogService {
  private blogSlugs = ['ng-test']; // Add your slugs here

  constructor(private http: HttpClient) {}

  async getAll(): Promise<Blog[]> {
    const blogs: Blog[] = [];

    for (const slug of this.blogSlugs) {
      const blog = await this.getBySlug(slug);
      if (blog) blogs.push(blog);
    }

    return blogs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }

  async getBySlug(slug: string): Promise<Blog | null> {
    try {
      const markdown = await this.http
        .get(`assets/blogs/${slug}.md`, { responseType: 'text' })
        .toPromise();

      const parsed = fm(markdown || '');
      const attributes = parsed.attributes as any;

      return {
        title: attributes.title || 'Untitled',
        slug,
        date: attributes.date || '',
        coverImage: attributes.coverImage || '',
        tags: attributes.tags || [],
        content: parsed.body
      };
    } catch (e) {
      console.error('Blog not found:', slug);
      return null;
    }
  }
}
