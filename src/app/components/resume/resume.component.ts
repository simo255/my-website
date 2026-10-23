import { Component, OnInit, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { getPortfolioData } from '../../data/site-data';
import { LanguageService } from '../../services/language.service';
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
  private readonly langService = inject(LanguageService);
  private readonly blogService = inject(BlogService);

  readonly currentData = computed(() => getPortfolioData(this.langService.lang()));

  get site() { return this.currentData().site; }
  get experience() { return this.currentData().experience; }
  get featuredProjects() { return this.currentData().featuredProjects; }
  get moreProjects() { return this.currentData().moreProjects; }
  get education() { return this.currentData().education; }
  get skillGroups() { return this.currentData().skillGroups; }
  get ui() { return this.currentData().ui; }

  posts: Blog[] = [];

  async ngOnInit(): Promise<void> {
    this.posts = await this.blogService.getAll();
  }

  formatDate(iso: string): string {
    return this.blogService.formatDate(iso);
  }

  get cvUrl(): string {
    return this.langService.lang() === 'en'
      ? 'assets/Mohamed_Waridi_Bennouna_CV_EN.pdf'
      : 'assets/Mohamed_Waridi_Bennouna_CV_FR.pdf';
  }

  printResume(): void {
    if (typeof window !== 'undefined') {
      window.open(this.cvUrl, '_blank');
    }
  }
}
