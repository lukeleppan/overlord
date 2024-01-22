import { Routes } from '@angular/router';
import { EditWritingComponent } from './pages/edit-writing/edit-writing.component';
import { NewWritingComponent } from './pages/new-writing/new-writing.component';
import { WritingComponent } from './writing.component';

export const routes: Routes = [
  {
    path: '',
    component: WritingComponent,
  },
  {
    path: 'new',
    component: NewWritingComponent,
  },
  {
    path: 'edit/:id',
    component: EditWritingComponent,
  },
];
