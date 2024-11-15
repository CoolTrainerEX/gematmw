import { Component } from '@angular/core';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  articles;

  constructor(private articleService: ArticleService) {
    this.articles = articleService.articles;
  }
}
