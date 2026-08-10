import { APP_INITIALIZER, ApplicationConfig, inject, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';

import { routes } from './app.routes';

function initializePrimeNg(): () => void {
  const primeNgConfig = inject(PrimeNGConfig);

  return () => {
    primeNgConfig.ripple = true;
    primeNgConfig.zIndex = {
      modal: 1200,
      overlay: 1100,
      menu: 1150,
      tooltip: 1300
    };
  };
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: initializePrimeNg
    }
  ]
};
