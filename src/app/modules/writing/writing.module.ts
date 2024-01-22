import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { routes } from './writing.routes';
import { ToastService } from '../../core/services/toast.service';

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes), HttpClientModule],
  exports: [RouterModule],
})
export class WritingModule {}
