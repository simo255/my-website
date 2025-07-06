import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../services/blogs.service';
import { Blog } from '../../interface/blog.model';
import { MarkdownModule } from 'ngx-markdown';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, MarkdownModule],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.scss'

})
export class BlogDetailComponent {
  blog?: Blog;

  constructor(private route: ActivatedRoute, private blogService: BlogService) {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (slug) {
      this.blogService.getBySlug(slug).then(b => (this.blog = b || undefined));
    }
  }
}
