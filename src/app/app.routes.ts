import { Routes } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { ArticlesComponent } from './modules/articles/articles.component';
import { AnalyticsComponent } from './modules/analytics/pages/analytics/analytics.component';
import { NewArticleComponent } from './modules/articles/pages/new-article/new-article.component';
import { EditArticleComponent } from './modules/articles/pages/edit-article/edit-article.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'articles',
    component: ArticlesComponent,
    children: [{ path: 'new', component: NewArticleComponent }],
  },
  { path: 'articles/edit/:id', component: EditArticleComponent },
  { path: 'analytics', component: AnalyticsComponent },
];
