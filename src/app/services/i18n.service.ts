import { DOCUMENT } from '@angular/common';
import { Injectable, computed, effect, inject, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { LANDING_PAGE_TRANSLATIONS } from '../data/landing-page.data';
import { LocaleCode, SUPPORTED_LOCALES } from '../models/i18n.models';

const LOCALE_STORAGE_KEY = 'physioflow-locale';

@Injectable({
  providedIn: 'root'
})
export class I18nService {
  private readonly document = inject(DOCUMENT);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly defaultView = this.document.defaultView;

  readonly supportedLocales = SUPPORTED_LOCALES;
  readonly locale = signal<LocaleCode>(this.resolveInitialLocale());
  readonly bundle = computed(() => LANDING_PAGE_TRANSLATIONS[this.locale()]);

  constructor() {
    effect(() => {
      const activeBundle = this.bundle();

      this.document.documentElement.lang = activeBundle.locale;
      this.title.setTitle(activeBundle.documentTitle);
      this.meta.updateTag({ name: 'description', content: activeBundle.documentDescription });
      this.defaultView?.localStorage?.setItem(LOCALE_STORAGE_KEY, activeBundle.locale);
    });
  }

  setLocale(locale: LocaleCode): void {
    this.locale.set(locale);
  }

  toggleLocale(): void {
    this.locale.set(this.locale() === 'en' ? 'el' : 'en');
  }

  private resolveInitialLocale(): LocaleCode {
    const storedLocale = this.defaultView?.localStorage?.getItem(LOCALE_STORAGE_KEY);

    if (storedLocale === 'en' || storedLocale === 'el') {
      return storedLocale;
    }

    const browserLanguage = this.defaultView?.navigator?.language?.toLowerCase() ?? 'en';
    return browserLanguage.startsWith('el') ? 'el' : 'en';
  }
}