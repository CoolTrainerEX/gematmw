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
      let article: Article = ArticleService.emptyArticle;

      http.get(`assets/${i}.json`).subscribe((file) => {
        article = file as Article;
      });

      this.articles.push(article);
    }
  }

  public get getArticles(): {
    id: string;
    title: string;
    author: string;
    img: string;
  }[] {
    return this.articles.map(({ id, title, author, img }) => ({
      id,
      title,
      author,
      img,
    }));
  }

  getArticle(id: string): Article {
    const article = this.articles.find((article) => article.id == id);
    if (article) return article;
    else this.router.navigate(['pagenotfound']);

    // resolve ts
    return ArticleService.emptyArticle;
  }
}
