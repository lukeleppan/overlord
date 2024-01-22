import { Injectable } from '@angular/core';

interface Toast {
  id: number;
  message: string;
  type: 'success' | 'error' | 'info';
  duration: number;
}

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  toasts: Toast[] = [];

  showToast(
    message: string,
    type: 'success' | 'error' | 'info',
    duration = 3000
  ) {
    const toast: Toast = { id: Date.now(), message, type, duration };
    this.toasts.push(toast);
    setTimeout(() => this.removeToast(toast.id), duration);
  }

  removeToast(id: number) {
    this.toasts = this.toasts.filter((t) => t.id !== id);
  }
}
