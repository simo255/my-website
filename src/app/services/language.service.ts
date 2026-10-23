import { Injectable, signal, effect } from '@angular/core';

export type Language = 'en' | 'fr';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  readonly lang = signal<Language>(this.getInitialLang());

  constructor() {
    effect(() => {
      const current = this.lang();
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('portfolio_lang', current);
        document.documentElement.lang = current;
      }
    });
  }

  private getInitialLang(): Language {
    if (typeof window !== 'undefined' && window.localStorage) {
      const saved = localStorage.getItem('portfolio_lang') as Language;
      if (saved === 'fr' || saved === 'en') return saved;
      const browserLang = navigator.language?.slice(0, 2);
      if (browserLang === 'en') return 'en';
    }
    return 'fr';
  }

  setLang(lang: Language) {
    this.lang.set(lang);
  }

  toggle() {
    this.lang.set(this.lang() === 'fr' ? 'en' : 'fr');
  }
}
