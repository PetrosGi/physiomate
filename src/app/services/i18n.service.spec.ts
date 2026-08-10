import { TestBed } from '@angular/core/testing';

import { I18nService } from './i18n.service';

describe('I18nService', () => {
  let service: I18nService;

  beforeEach(() => {
    localStorage.removeItem('physioflow-locale');
    document.documentElement.lang = 'en';
    TestBed.configureTestingModule({});
    service = TestBed.inject(I18nService);
    service.setLocale('en');
  });

  it('should default to a supported locale', () => {
    expect(['en', 'el']).toContain(service.locale());
  });

  it('should expose Greek content after switching locale', () => {
    service.setLocale('el');

    expect(service.bundle().locale).toBe('el');
    expect(service.bundle().navLinks[0].label).toBe('Αρχική');
  });
});