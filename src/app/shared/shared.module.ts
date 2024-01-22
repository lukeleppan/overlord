import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterLink, ButtonComponent],
  exports: [RouterLink, ButtonComponent],
})
export class SharedModule {}
