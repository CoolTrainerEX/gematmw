import { Injectable } from '@angular/core';
import { Article } from './article';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private static readonly emptyArticle: Article = {
    id: '',
    title: '',
    author: '',
    img: '',
    content: '',
  };
  private articles: Article[] = [];

  constructor(
    private router: Router,
    private http: HttpClient,
  ) {
    const noOfArticles = 3;

    for (let i = 0; i < noOfArticles; i++) {
      http
        .get(`https://cooltrainerex.github.io/gematmw-articles/${i}.json`)
        .subscribe((article) => {
          this.articles.push(article as Article);
        });
    }
  }

  public get getArticles(): Article[] {
    return this.articles;
  }

  getArticle(id: string): Article {
    const article = this.articles.find((article) => article.id == id);
    if (article) return article;
    else this.router.navigate(['pagenotfound']);

    // resolve ts
    return ArticleService.emptyArticle;
  }
}
