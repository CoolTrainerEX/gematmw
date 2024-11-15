import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  articles = [
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
  constructor() {}
}
