import { Component, Input, inject, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../../shared/shared.module';
import {
  ArticleRequest,
  ArticlesService,
} from '../../services/articles.service';
import { identifierFromTitle } from '../../utils/format';
import { animate, style, transition, trigger } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastService } from '../../../../core/services/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-article',
  standalone: true,
  imports: [SharedModule, ReactiveFormsModule],
  templateUrl: './new-article.component.html',
  styleUrl: './new-article.component.scss',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: '0%' }),
        animate('400ms ease-in', style({ opacity: '100%' })),
      ]),
    ]),
  ],
})
export class NewArticleComponent {
  @Input() fetchArticles: () => void = () => {};
  toast = inject(ToastService);
  router = inject(Router);
  writingService = inject(ArticlesService);

  title = new FormControl('');
  description = new FormControl('');

  constructor() {
    this.createArticle = this.createArticle.bind(this);
  }

  createArticle() {
    let title: string = this.title.value as string;
    let description: string = this.description.value as string;
    this.writingService
      .createArticle({
        identifier: identifierFromTitle(title),
        title: title,
        description: description,
        content: `# ${title}`,
      })
      .subscribe((res) => {
        if (res.status == 201) {
          this.toast.showToast('Article successfully created', 'success');
          this.fetchArticles();
          this.router.navigateByUrl('/articles');
        }
      });
  }
}
