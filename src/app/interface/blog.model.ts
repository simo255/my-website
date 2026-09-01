export interface Blog {
  title: string;
  slug: string;
  date: string;
  coverImage?: string;
  tags: string[];
  excerpt: string;
  content: string;
}
