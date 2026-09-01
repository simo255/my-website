import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  site,
  experience,
  featuredProjects,
  moreProjects,
  education,
  skillGroups,
  Project,
  Experience,
} from '../../data/site-data';
import { BlogService } from '../../services/blogs.service';
import { Blog } from '../../interface/blog.model';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss',
})
export class ResumeComponent implements OnInit {
  site = site;
  experience = experience;
  featuredProjects = featuredProjects;
  moreProjects = moreProjects;
  education = education;
  skillGroups = skillGroups;
  posts: Blog[] = [];
  showCourses = false;

  constructor(private blogService: BlogService) {}

  async ngOnInit(): Promise<void> {
    this.posts = await this.blogService.getAll();
  }

  toggleCourses(): void {
    this.showCourses = !this.showCourses;
  }

  formatDate(iso: string): string {
    return this.blogService.formatDate(iso);
  }
}