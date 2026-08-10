import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TagModule } from 'primeng/tag';

import { AccentTone, BenefitItem } from '../../models/landing-page.models';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-benefits-section',
  standalone: true,
  imports: [CommonModule, TagModule],
  templateUrl: './benefits-section.component.html',
  styleUrl: './benefits-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BenefitsSectionComponent {
  protected readonly bundle = inject(I18nService).bundle;

  protected trackById(_: number, item: BenefitItem): string {
    return item.id;
  }

  protected resolveTagSeverity(accent: AccentTone): 'info' | 'success' | 'warning' {
    if (accent === 'secondary') {
      return 'success';
    }

    if (accent === 'tertiary') {
      return 'warning';
    }

    return 'info';
  }
}