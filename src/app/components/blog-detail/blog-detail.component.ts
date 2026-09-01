import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';
import { Subscription } from 'rxjs';
import { BlogService } from '../../services/blogs.service';
import { Blog } from '../../interface/blog.model';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, MarkdownModule],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.scss',
})
export class BlogDetailComponent implements OnInit, OnDestroy {
  blog: Blog | null = null;
  others: Blog[] = [];
  loading = true;
  private routeSub?: Subscription;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService
  ) {}

  ngOnInit(): void {
    this.routeSub = this.route.paramMap.subscribe(async (params) => {
      const slug = params.get('slug');
      this.loading = true;
      if (slug) {
        this.blog = await this.blogService.getBySlug(slug);
        const all = await this.blogService.getAll();
        this.others = all.filter((b) => b.slug !== slug);
      } else {
        this.blog = null;
        this.others = [];
      }
      this.loading = false;
      window.scrollTo(0, 0);
    });
  }

  ngOnDestroy(): void {
    this.routeSub?.unsubscribe();
  }

  formatDate(iso: string): string {
    return this.blogService.formatDate(iso);
  }
}
