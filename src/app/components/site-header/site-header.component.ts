import { CommonModule, DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, inject, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';

import { NavLink } from '../../models/landing-page.models';
import { LocaleCode } from '../../models/i18n.models';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-site-header',
  standalone: true,
  imports: [CommonModule, ButtonModule, SidebarModule],
  templateUrl: './site-header.component.html',
  styleUrl: './site-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SiteHeaderComponent {
  private readonly i18n = inject(I18nService);

  protected readonly bundle = this.i18n.bundle;
  protected readonly currentLocale = this.i18n.locale;
  protected readonly locales = this.i18n.supportedLocales;
  protected readonly mobileNavVisible = signal(false);

  constructor(@Inject(DOCUMENT) private readonly document: Document) {}

  scrollToSection(fragment: NavLink['fragment']): void {
    const section = this.document.getElementById(fragment);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    this.mobileNavVisible.set(false);
  }

  protected onNavClick(event: Event, fragment: NavLink['fragment']): void {
    event.preventDefault();
    this.scrollToSection(fragment);
  }

  protected setLocale(locale: LocaleCode): void {
    this.i18n.setLocale(locale);
  }
}