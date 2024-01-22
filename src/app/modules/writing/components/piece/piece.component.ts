import { Component, Input } from '@angular/core';
import { Writing } from '../../../../core/models/writing.model';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-piece',
  standalone: true,
  imports: [NgIf, RouterLink],
  templateUrl: './piece.component.html',
  styleUrl: './piece.component.scss',
})
export class PieceComponent {
  @Input() piece: Writing = {} as Writing;
  @Input() onEdit: (piece: Writing) => void = () => {};
}
