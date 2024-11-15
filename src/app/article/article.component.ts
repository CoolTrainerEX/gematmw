import { Component } from '@angular/core';
import { ArticleService } from '../article.service';
import { Article } from '../article';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss',
})
export class ArticleComponent {
  article: Article;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService,
  ) {
    this.article = articleService.getArticle(
      route.snapshot.paramMap.get('id') as string,
    );
  }
}
