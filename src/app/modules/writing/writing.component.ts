import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Writing } from '../../core/models/writing.model';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import moment from 'moment';
import { SharedModule } from '../../shared/shared.module';
import { PieceComponent } from './components/piece/piece.component';

@Component({
  selector: 'app-writing',
  standalone: true,
  imports: [FontAwesomeModule, NgFor, PieceComponent, SharedModule],
  templateUrl: './writing.component.html',
  styleUrl: './writing.component.scss',
})
export class WritingComponent implements OnInit {
  private apiUrl = 'http://0.0.0.0:42069/api/writing';

  faPlus = faPlus;
  faEdit = faEdit;
  faTrash = faTrash;
  writing: Writing[];

  constructor(private http: HttpClient) {
    this.writing = [];
  }

  ngOnInit(): void {
    this.fetchWriting();
  }

  fetchWriting() {
    this.getWriting().subscribe((data: Writing[]) => {
      this.writing = data;
    });
  }

  getWriting(): Observable<Writing[]> {
    console.log('getWriting');
    return this.http.get<Writing[]>(this.apiUrl).pipe(
      map((writings) =>
        writings.map((writing) => ({
          ...writing,
          createdAt: moment(writing.createdAt),
          updatedAt: moment(writing.updatedAt),
        }))
      )
    );
  }

  onNew() {
    console.log('New');
  }

  onEdit(piece: Writing) {
    console.log('Edit');
  }

  onDelete(piece: Writing) {
    console.log('Delete');
  }
}
