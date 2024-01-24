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

interface ArticlePostResponse {
  id: number;
  identifier: string;
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

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.apiUrl + '/api/writing').pipe(
      map((writings) =>
        writings.map((writing) => ({
          ...writing,
          createdAt: moment(writing.createdAt),
          updatedAt: moment(writing.updatedAt),
        }))
      )
    );
  }

  getArticle(identifier: string): Observable<ArticleGetResponse> {
    return this.http
      .get<ArticleGetResponse>(this.apiUrl + '/api/writing/' + identifier)
      .pipe(
        map((response) => ({
          ...response,
          createdAt: moment(response.article.createdAt),
          updatedAt: moment(response.article.updatedAt),
        }))
      );
  }

  createArticle(writing: ArticleRequest) {
    return this.http.post<ArticlePostResponse>(
      this.apiUrl + '/api/writing',
      writing,
      {
        observe: 'response',
      }
    );
  }
}
