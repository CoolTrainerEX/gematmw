import { Injectable } from '@angular/core';
import { Article } from './article';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private articles: Article[];

  constructor(private router: Router) {
    this.articles = [
      {
        id: '1',
        title: 'yes',
        author: 'no',
        img: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Donald_Trump_official_portrait.jpg',
        content: 'yes',
      },
      {
        id: '2',
        title: 'no',
        author: 'yes',
        img: 'https://upload.wikimedia.org/wikipedia/commons/6/68/Joe_Biden_presidential_portrait.jpg',
        content: 'yes',
      },
      {
        id: '3',
        title: 'ye s',
        author: 'yes',
        img: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/President_Barack_Obama.jpg',
        content: 'yes',
      },
    ];
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
    return { id: '', title: '', author: '', img: '', content: '' };
  }
}
