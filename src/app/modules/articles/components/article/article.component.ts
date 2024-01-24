import { Component, Input } from '@angular/core';
import { Article } from '../../../../core/models/writing.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss',
})
export class ArticleComponent {
  @Input() article: Article = {} as Article;
  @Input() onEdit: (article: Article) => void = () => {};
}
