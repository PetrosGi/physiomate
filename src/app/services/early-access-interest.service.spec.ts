import { TestBed, fakeAsync, tick } from '@angular/core/testing';

import { EarlyAccessInterestService } from './early-access-interest.service';

describe('EarlyAccessInterestService', () => {
  let service: EarlyAccessInterestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EarlyAccessInterestService);
  });

  it('should return a deterministic success result', fakeAsync(() => {
    let result: { success: boolean; message: string } | undefined;

    service
      .submitInterest({
        fullName: 'Alex Morgan',
        email: 'alex@example.com',
        source: 'landing-page',
        submittedAt: '2026-01-01T00:00:00.000Z'
      })
      .subscribe((value) => {
        result = value;
      });

    tick(750);

    expect(result).toEqual({
      success: true,
      message: 'Thanks — we’ll share launch updates and early-access details soon.'
    });
  }));
});