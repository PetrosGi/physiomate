import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { FooterLink } from '../../models/landing-page.models';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-site-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './site-footer.component.html',
  styleUrl: './site-footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SiteFooterComponent {
  protected readonly bundle = inject(I18nService).bundle;
  protected readonly currentYear = new Date().getFullYear();

  protected trackByLabel(_: number, item: FooterLink): string {
    return item.label;
  }
}