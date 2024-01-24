import { Component, Input, inject, input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
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
  toast = inject(ToastService);
  router = inject(Router);
  writingService = inject(ArticlesService);

  newForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
  });

  constructor() {
    this.createArticle = this.createArticle.bind(this);
  }

  createArticle() {
    let title: string = this.newForm.get('title')?.value as string;
    let description: string = this.newForm.get('description')?.value as string;
    console.log(title, description);
    this.writingService
      .createArticle({
        identifier: identifierFromTitle(title),
        title: title,
        description: description,
        content: `# ${title}`,
      })
      .subscribe({
        next: (res) => {
          console.log(res);
          const message = res.body?.message as string;
          if (res.status == 201) {
            this.toast.showToast(message, 'success');
            this.router.navigateByUrl('/articles');
          }
        },
        error: (err) => {
          console.log(err);
          this.toast.showToast(err.error.message, 'error', 10000);
        },
      });
  }
}
