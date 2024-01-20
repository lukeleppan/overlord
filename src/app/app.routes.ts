import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WritingComponent } from './writing/writing.component';
import { AnalyticsComponent } from './analytics/analytics.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'writing', component: WritingComponent },
  { path: 'analytics', component: AnalyticsComponent },
];
