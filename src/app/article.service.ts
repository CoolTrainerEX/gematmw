import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  articles = [
    {
      title: 'yes',
      author: 'no',
      content: 'yes',
    },
    {
      title: 'no',
      author: 'yes',
      content: 'yes',
    },
  ];
  constructor() {}
}
