import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { WorkflowStep } from '../../models/landing-page.models';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-workflow-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './workflow-section.component.html',
  styleUrl: './workflow-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkflowSectionComponent {
  protected readonly bundle = inject(I18nService).bundle;

  protected trackByStep(_: number, item: WorkflowStep): number {
    return item.step;
  }
}