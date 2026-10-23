import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { BlogService, formatBlogDate } from './blogs.service';

describe('BlogService date handling', () => {
  async function readPost(date: string) {
    const http = {
      get: () =>
        of(
          `---\ntitle: A note\ndate: ${date}\ntags: [AI]\n---\n\nA short note.`,
        ),
    } as unknown as HttpClient;
    return new BlogService(http).getBySlug('a-note');
  }

  it('preserves the calendar day of an unquoted YAML date', async () => {
    const post = await readPost('2025-07-06');
    expect(post?.date).toBe('2025-07-06');
    expect(formatBlogDate(post!.date)).toBe('6 Jul 2025');
  });

  it('also accepts a quoted date string', async () => {
    const post = await readPost('"2025-07-06"');
    expect(post?.date).toBe('2025-07-06');
  });

  it('keeps undated posts readable', async () => {
    const post = await readPost('');
    expect(post?.date).toBe('');
    expect(formatBlogDate('')).toBe('');
  });

  it('leaves an unrecognized date unchanged instead of rendering Invalid Date', () => {
    expect(formatBlogDate('unknown')).toBe('unknown');
  });
});
