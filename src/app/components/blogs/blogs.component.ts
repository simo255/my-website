import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BlogService } from '../../services/blogs.service';
import { Blog } from '../../interface/blog.model';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss'
})
export class BlogsComponent implements OnInit {
  blogs: Blog[] = [];

  constructor(private blogService: BlogService) {}

  async ngOnInit(): Promise<void> {
    this.blogs = await this.blogService.getAll();
  }

  formatDate(iso: string): string {
    return this.blogService.formatDate(iso);
  }
}
