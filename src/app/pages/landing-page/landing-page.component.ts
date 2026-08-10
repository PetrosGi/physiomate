import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { BenefitsSectionComponent } from '../../components/benefits-section/benefits-section.component';
import { EarlyAccessSectionComponent } from '../../components/early-access-section/early-access-section.component';
import { FeaturesSectionComponent } from '../../components/features-section/features-section.component';
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';
import { SiteFooterComponent } from '../../components/site-footer/site-footer.component';
import { SiteHeaderComponent } from '../../components/site-header/site-header.component';
import { I18nService } from '../../services/i18n.service';
import { WorkflowSectionComponent } from '../../components/workflow-section/workflow-section.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    SiteHeaderComponent,
    HeroSectionComponent,
    FeaturesSectionComponent,
    WorkflowSectionComponent,
    BenefitsSectionComponent,
    EarlyAccessSectionComponent,
    SiteFooterComponent
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingPageComponent {
  protected readonly bundle = inject(I18nService).bundle;
}