import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({ selector: 'app-marketing-cta', standalone: true, imports: [RouterLink], templateUrl: './marketing-cta.component.html', styleUrl: './marketing-cta.component.scss', changeDetection: ChangeDetectionStrategy.OnPush })
export class MarketingCtaComponent { @Input({ required: true }) title = ''; }
