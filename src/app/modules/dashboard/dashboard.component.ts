import { Component, OnInit, inject } from '@angular/core';
import { ToastService } from '../../core/services/toast.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  toast = inject(ToastService);

  ngOnInit(): void {
    console.log(this.toast);
    this.toast.showToast('Welcome to Overlord', 'info');
  }
}
