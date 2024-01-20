import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { WritingComponent } from '../writing/writing.component';
import { AnalyticsComponent } from '../analytics/analytics.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'writing', component: WritingComponent },
  { path: 'analytics', component: AnalyticsComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
