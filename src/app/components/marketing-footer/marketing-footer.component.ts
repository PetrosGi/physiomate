import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-marketing-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './marketing-footer.component.html',
  styleUrl: './marketing-footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarketingFooterComponent {}
