import { Component } from '@angular/core';
import { ArticleService } from '../article.service';
import { RouterLink } from '@angular/router';
import { Article } from '../article';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  articles: Article[];

  constructor(private readonly articleService: ArticleService) {
    this.articles = articleService.getArticles;
  }
}
