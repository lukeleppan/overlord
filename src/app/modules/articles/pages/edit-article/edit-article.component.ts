import { Component, Input, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
  ArticleGetResponse,
  ArticlesService,
} from '../../services/articles.service';
import { Observable, Subscription } from 'rxjs';
import { Article } from '../../../../core/models/writing.model';
import { SharedModule } from '../../../../shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-edit-article',
  standalone: true,
  imports: [SharedModule, ReactiveFormsModule, FontAwesomeModule],
  templateUrl: './edit-article.component.html',
  styleUrl: './edit-article.component.scss',
})
export class EditArticleComponent implements OnInit {
  faArrowLeft = faArrowLeft;

  private articlesService = inject(ArticlesService);
  private article: Article = {} as Article;

  @Input() id?: string;

  editorForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    content: new FormControl(''),
  });

  constructor() {}

  ngOnInit(): void {
    console.log(this.id);
    this.articlesService
      .getArticle(this.id as string)
      .subscribe((response: ArticleGetResponse) => {
        const article = response.article;
        this.article = article;
        console.log(article);
        this.editorForm.setValue({
          title: article.title,
          description: article.description,
          content: article.content as string,
        });
      });
  }

  updateArticle = () => {
    console.log(this.editorForm.value);
  };

  publishArticle = () => {
    console.log(this.editorForm.value);
  };

  deleteArticle = () => {
    console.log(this.editorForm.value);
  };
}
