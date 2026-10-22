import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { MarketingCtaComponent } from '../../components/marketing-cta/marketing-cta.component';
import { MarketingFooterComponent } from '../../components/marketing-footer/marketing-footer.component';
import { MarketingHeaderComponent } from '../../components/marketing-header/marketing-header.component';

type PublicPage = 'home' | 'physiomate' | 'pricing' | 'vision' | 'resources' | 'contact' | 'reviews' | 'governance';

@Component({
  selector: 'app-public-site',
  standalone: true,
  imports: [CommonModule, RouterLink, MarketingHeaderComponent, MarketingFooterComponent, MarketingCtaComponent],
  templateUrl: './public-site.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PublicSiteComponent {
  private readonly route = inject(ActivatedRoute);
  protected readonly page = (this.route.snapshot.data['page'] ?? 'home') as PublicPage;
  protected readonly solutions = [
    ['pi pi-wave-pulse', 'Κλινική Αξιολόγηση'], ['pi pi-calendar', 'Ημερολόγιο & Ραντεβού'], ['pi pi-calendar-clock', 'Ιστορικό Ασθενή'], ['pi pi-euro', 'Οικονομικά']
  ];
  protected readonly workflow = ['Δημιουργείς ασθενή', 'Καταγράφεις το ιστορικό', 'Κάνεις την αξιολόγηση', 'Καταγράφεις ειδικά tests', 'Οργανώνεις τη θεραπεία', 'Παρακολουθείς την πορεία'];
  protected readonly reviews = ['«Έχω όλη την εικόνα του ασθενή μου σε ένα σημείο.» — Μαρία Κ.', '«Σταμάτησα να ψάχνω σε φακέλους και σημειώσεις.» — Γιώργος Π.', '«Βλέπω τα οικονομικά του μήνα χωρίς Excel.» — Ελένη Δ.'];
  protected readonly resources = ['Οργάνωση ιατρείου', 'Clinical assessment', 'Patient management', 'Ραντεβού', 'GDPR', 'Ψηφιοποίηση'];
}
