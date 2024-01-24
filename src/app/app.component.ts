import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SidemenuComponent } from './core/components/sidemenu/sidemenu.component';
import { ToastComponent } from './core/components/toast/toast.component';
import { ToastService } from './core/services/toast.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, SidemenuComponent, ToastComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  toast = inject(ToastService);
  title = 'overlord';

  ngOnInit(): void {
    this.toast.showToast('Welcome to Overlord', 'info');
  }
}
