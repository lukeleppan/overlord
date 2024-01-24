import { Component, DoCheck, OnDestroy, OnInit, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgFor } from '@angular/common';
import { faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Article } from '../../core/models/writing.model';
import { SharedModule } from '../../shared/shared.module';
import { ArticleComponent } from './components/article/article.component';
import { ToastService } from '../../core/services/toast.service';
import { ArticlesService } from './services/articles.service';
import {
  Event,
  NavigationEnd,
  Router,
  RouterLink,
  RouterModule,
} from '@angular/router';
import { Subscription, filter } from 'rxjs';

@Component({
  selector: 'app-writing',
  standalone: true,
  imports: [
    RouterModule,
    RouterLink,
    FontAwesomeModule,
    NgFor,
    ArticleComponent,
    SharedModule,
  ],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss',
})
export class ArticlesComponent implements OnInit, OnDestroy {
  private router = inject(Router);
  private toast = inject(ToastService);
  private writingService = inject(ArticlesService);

  private routeSubscription: Subscription;
  faPlus = faPlus;
  faEdit = faEdit;
  faTrash = faTrash;
  articles: Article[];

  constructor() {
    // this.onNew = this.onNew.bind(this); How to get toast to work.
    this.articles = [];
    console.log(this.writingService);
    console.log(this.toast);

    this.routeSubscription = this.router.events
      .pipe(
        filter(
          (event: Event): event is NavigationEnd =>
            event instanceof NavigationEnd
        )
      )
      .subscribe((event: NavigationEnd) => {
        if (event.url === '/articles') {
          this.fetchWriting();
        }
      });
  }

  ngOnInit(): void {
    this.toast.showToast('Welcome to Writing', 'info');
    this.fetchWriting();
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }

  fetchWriting() {
    console.log(this.writingService);
    this.writingService.getArticles().subscribe((data: Article[]) => {
      this.articles = data;
    });
  }

  // onNew() {
  //   this.toast.showToast('New writing', 'info');
  // }
}
