import { NgModule } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { CodemirrorComponent } from './components/codemirror/codemirror.component';

@NgModule({
  imports: [RouterLink, ButtonComponent, SpinnerComponent, CodemirrorComponent],
  exports: [RouterLink, ButtonComponent, SpinnerComponent, CodemirrorComponent],
})
export class SharedModule {}
