import { CommonModule, DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

import { NavLink } from '../../models/landing-page.models';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, ButtonModule, TagModule],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroSectionComponent {
  private readonly i18n = inject(I18nService);

  protected readonly bundle = this.i18n.bundle;
  protected readonly financeBars = [38, 54, 74, 60, 82];

  constructor(@Inject(DOCUMENT) private readonly document: Document) {}

  protected scrollToSection(fragment: NavLink['fragment']): void {
    this.document.getElementById(fragment)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}