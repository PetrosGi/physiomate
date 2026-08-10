import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TagModule } from 'primeng/tag';

import { AccentTone, FeatureCard, FeaturePreviewItem } from '../../models/landing-page.models';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-features-section',
  standalone: true,
  imports: [CommonModule, TagModule],
  templateUrl: './features-section.component.html',
  styleUrl: './features-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeaturesSectionComponent {
  protected readonly bundle = inject(I18nService).bundle;

  protected resolveTagSeverity(accent: AccentTone): 'info' | 'success' | 'warning' {
    if (accent === 'secondary') {
      return 'success';
    }

    if (accent === 'tertiary') {
      return 'warning';
    }

    return 'info';
  }

  protected trackById(_: number, item: FeatureCard): string {
    return item.id;
  }

  protected trackByPreview(_: number, item: FeaturePreviewItem): string {
    return item.title;
  }
}