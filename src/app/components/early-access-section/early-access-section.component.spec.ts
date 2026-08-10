import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { TestBed } from '@angular/core/testing';
import { of, Subject } from 'rxjs';

import { EarlyAccessSubmissionResult } from '../../models/landing-page.models';
import { EarlyAccessInterestService } from '../../services/early-access-interest.service';
import { I18nService } from '../../services/i18n.service';
import { EarlyAccessSectionComponent } from './early-access-section.component';

describe('EarlyAccessSectionComponent', () => {
  let serviceSpy: jasmine.SpyObj<EarlyAccessInterestService>;

  beforeEach(async () => {
    serviceSpy = jasmine.createSpyObj<EarlyAccessInterestService>('EarlyAccessInterestService', ['submitInterest']);
    serviceSpy.submitInterest.and.returnValue(of({ success: true, message: 'Saved.' }));

    await TestBed.configureTestingModule({
      imports: [EarlyAccessSectionComponent],
      providers: [provideNoopAnimations(), { provide: EarlyAccessInterestService, useValue: serviceSpy }]
    }).compileComponents();

    TestBed.inject(I18nService).setLocale('en');
  });

  it('should show validation errors and avoid submission when required fields are missing', () => {
    const fixture = TestBed.createComponent(EarlyAccessSectionComponent);
    fixture.detectChanges();

    fixture.componentInstance['submitForm']();
    fixture.detectChanges();

    expect(serviceSpy.submitInterest).not.toHaveBeenCalled();
    expect(fixture.componentInstance['isFieldInvalid']('fullName')).toBeTrue();
    expect(fixture.componentInstance['isFieldInvalid']('email')).toBeTrue();
  });

  it('should render translated validation messages in Greek when the locale changes', () => {
    TestBed.inject(I18nService).setLocale('el');

    const fixture = TestBed.createComponent(EarlyAccessSectionComponent);
    fixture.detectChanges();

    fixture.componentInstance['submitForm']();
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Το ονοματεπώνυμο είναι υποχρεωτικό.');
    expect(compiled.textContent).toContain('Το email είναι υποχρεωτικό.');
  });

  it('should submit a trimmed payload, show loading, and reset the form on success', () => {
    const response$ = new Subject<EarlyAccessSubmissionResult>();
    serviceSpy.submitInterest.and.returnValue(response$.asObservable());

    const fixture = TestBed.createComponent(EarlyAccessSectionComponent);
    fixture.detectChanges();

    fixture.componentInstance['form'].setValue({
      fullName: '  Alex Morgan  ',
      email: 'alex@example.com',
      message: '  Looking for tablet-first scheduling.  '
    });

    fixture.componentInstance['submitForm']();
    fixture.detectChanges();

    expect(serviceSpy.submitInterest).toHaveBeenCalledWith(
      jasmine.objectContaining({
        fullName: 'Alex Morgan',
        email: 'alex@example.com',
        message: 'Looking for tablet-first scheduling.',
        source: 'landing-page'
      })
    );
    expect(fixture.componentInstance['isSubmitting']()).toBeTrue();

    response$.next({ success: true, message: 'Saved.' });
    response$.complete();
    fixture.detectChanges();

    expect(fixture.componentInstance['isSubmitting']()).toBeFalse();
    expect(fixture.componentInstance['submissionResult']()?.success).toBeTrue();
    expect(fixture.componentInstance['submissionResult']()?.message).toBe(
      'Thanks — we’ll share launch updates and early-access details soon.'
    );
    expect(fixture.componentInstance['form'].getRawValue()).toEqual({
      fullName: '',
      email: '',
      message: ''
    });
  });
});