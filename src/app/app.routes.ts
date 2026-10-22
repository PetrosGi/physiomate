import { Routes } from '@angular/router';

import { PublicSiteComponent } from './pages/public-site/public-site.component';

export const routes: Routes = [
  {
    path: '',
    component: PublicSiteComponent,
    data: { page: 'home' }
  },
  { path: 'physiomate', component: PublicSiteComponent, data: { page: 'physiomate' } },
  { path: 'pricing', component: PublicSiteComponent, data: { page: 'pricing' } },
  { path: 'vision', component: PublicSiteComponent, data: { page: 'vision' } },
  { path: 'resources', component: PublicSiteComponent, data: { page: 'resources' } },
  { path: 'contact', component: PublicSiteComponent, data: { page: 'contact' } },
  { path: 'reviews', component: PublicSiteComponent, data: { page: 'reviews' } },
  { path: 'governance', component: PublicSiteComponent, data: { page: 'governance' } },
  {
    path: '**',
    redirectTo: ''
  }
];
