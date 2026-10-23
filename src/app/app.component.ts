import { Component, inject, computed } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { getPortfolioData } from './data/site-data';
import { LanguageService } from './services/language.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private readonly langService = inject(LanguageService);
  private readonly document = inject(DOCUMENT);

  readonly currentData = computed(() => getPortfolioData(this.langService.lang()));

  get site() {
    return this.currentData().site;
  }

  get ui() {
    return this.currentData().ui;
  }

  year = new Date().getFullYear();

  focusMain(event: Event): void {
    event.preventDefault();
    const main = this.document.getElementById('main');
    main?.focus({ preventScroll: true });
    main?.scrollIntoView({ block: 'start' });
  }
}
