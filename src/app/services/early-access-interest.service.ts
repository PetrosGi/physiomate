import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

import { EarlyAccessSubmission, EarlyAccessSubmissionResult } from '../models/landing-page.models';

@Injectable({
  providedIn: 'root'
})
export class EarlyAccessInterestService {
  submitInterest(_: EarlyAccessSubmission): Observable<EarlyAccessSubmissionResult> {
    return of({
      success: true,
      message: 'Thanks — we’ll share launch updates and early-access details soon.'
    }).pipe(delay(750));
  }
}