import { Injectable } from '@angular/core';
import { Article } from './article';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private articles: Article[] = [];

  constructor(private readonly http: HttpClient) {
    http
      .get('https://cooltrainerex.github.io/gematmw-articles/noOfArticles.json')
      .subscribe((value) => {
        for (let i = 0; i < (value as { value: number }).value; i++) {
          http
            .get(`https://cooltrainerex.github.io/gematmw-articles/${i}.json`)
            .subscribe((article) => {
              this.articles.push(article as Article);
            });
        }
      });
  }

  public get getArticles(): Article[] {
    return this.articles;
  }

  getArticle(id: string): Observable<Article> {
    const article = this.articles.find((article) => article.id == id);
    if (article) return of(article);
    else
      return this.http.get(
        `https://cooltrainerex.github.io/gematmw-articles/${id}.json`,
      ) as Observable<Article>;
  }
}
