import { Injectable } from '@angular/core';
import { Article } from '../../../core/models/writing.model';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import moment from 'moment';

export interface ArticleRequest {
  identifier: string;
  title: string;
  description: string;
  content: string;
}

interface ArticlePutResponse {
  id: number;
  message: string;
}

export interface ArticleGetResponse {
  message: string;
  article: Article;
}

@Injectable({
  providedIn: 'any',
})
export class ArticlesService {
  private apiUrl = 'http://0.0.0.0:42069';
  constructor(private http: HttpClient) {}

  getArticle(identifier: string): Observable<ArticleGetResponse> {
    return this.http
      .get<ArticleGetResponse>(`${this.apiUrl}/api/articles/${identifier}`, {
        observe: 'response',
      })
      .pipe(
        map((response) => ({
          message: response.body?.message as string,
          article: {
            ...(response.body?.article as Article),
            createdAt: moment(response.body?.article.createdAt),
            updatedAt: moment(response.body?.article.updatedAt),
          },
        })),
      );
  }

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(`${this.apiUrl}/api/articles`).pipe(
      map((articles) =>
        articles.map((article) => ({
          ...article,
          createdAt: moment(article.createdAt),
          updatedAt: moment(article.updatedAt),
        })),
      ),
    );
  }

  createArticle(writing: ArticleRequest) {
    return this.http.put<ArticlePutResponse>(
      `${this.apiUrl}/api/articles`,
      writing,
      {
        observe: 'response',
      },
    );
  }

  updateArticle(writing: ArticleRequest) {
    return this.http.patch<ArticlePutResponse>(
      `${this.apiUrl}/api/articles`,
      writing,
      {
        observe: 'response',
      },
    );
  }

  deleteArticle(identifier: string) {
    return this.http.delete<ArticlePutResponse>(
      `${this.apiUrl}'/api/articles/'${identifier}`,
      {
        observe: 'response',
      },
    );
  }
}
