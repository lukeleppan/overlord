import { Component, OnInit } from '@angular/core';
import { ToastService } from '../../services/toast.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [NgFor, FontAwesomeModule],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss',
})
export class ToastComponent implements OnInit {
  faTimes = faTimes;

  constructor(public toastService: ToastService) {}

  ngOnInit(): void {
    console.log(this.toastService);
  }
}
