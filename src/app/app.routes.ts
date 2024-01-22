import { Routes } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/pages/dashboard/dashboard.component';
import { WritingComponent } from './modules/writing/writing.component';
import { AnalyticsComponent } from './modules/analytics/pages/analytics/analytics.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  {
    path: 'writing',
    loadChildren: () =>
      import('./modules/writing/writing.module').then((m) => m.WritingModule),
  },
  { path: 'analytics', component: AnalyticsComponent },
];
