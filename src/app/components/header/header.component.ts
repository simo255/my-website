import { Component, inject, computed } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { getPortfolioData } from '../../data/site-data';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  readonly langService = inject(LanguageService);
  readonly data = computed(() => getPortfolioData(this.langService.lang()));

  get ui() {
    return this.data().ui;
  }

  get site() {
    return this.data().site;
  }

  get currentLang() {
    return this.langService.lang();
  }

  switchLang(lang: 'fr' | 'en') {
    this.langService.setLang(lang);
  }
}
