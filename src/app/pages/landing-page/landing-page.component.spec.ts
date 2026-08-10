import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { TestBed } from '@angular/core/testing';

import { I18nService } from '../../services/i18n.service';
import { LandingPageComponent } from './landing-page.component';

describe('LandingPageComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingPageComponent],
      providers: [provideNoopAnimations()]
    }).compileComponents();

    TestBed.inject(I18nService).setLocale('en');
  });

  it('should compose the landing page sections', () => {
    const fixture = TestBed.createComponent(LandingPageComponent);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('#home')).not.toBeNull();
    expect(compiled.querySelector('#features')).not.toBeNull();
    expect(compiled.querySelector('#workflow')).not.toBeNull();
    expect(compiled.querySelector('#benefits')).not.toBeNull();
    expect(compiled.querySelector('#early-access')).not.toBeNull();
  });

  it('should render the main hero headline', () => {
    const fixture = TestBed.createComponent(LandingPageComponent);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('PhysioFlow: streamlined clinic management, anywhere you go.');
  });

  it('should switch the page copy to Greek when the locale toggle is used', () => {
    const fixture = TestBed.createComponent(LandingPageComponent);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const localeButtons = Array.from(compiled.querySelectorAll('.site-header__locale-button')) as HTMLButtonElement[];
    const greekButton = localeButtons.find((button) => button.textContent?.trim() === 'ΕΛ');

    greekButton?.click();
    fixture.detectChanges();

    expect(compiled.textContent).toContain('PhysioFlow: απλοποιημένη διαχείριση κλινικής, όπου κι αν βρίσκεστε.');
    expect(document.documentElement.lang).toBe('el');
  });
});