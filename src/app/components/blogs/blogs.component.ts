import { Component } from '@angular/core';
import { BlogService } from '../../services/blogs.service';
import { Blog } from '../../interface/blog.model';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss'

})
export class BlogsComponent {
  blogs: Blog[] = [];

  constructor(private blogService: BlogService) {
    this.loadBlogs();
  }

  async loadBlogs() {
    this.blogs = await this.blogService.getAll();
  }
}
