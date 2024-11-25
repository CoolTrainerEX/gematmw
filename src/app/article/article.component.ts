import { Component } from '@angular/core';
import { ArticleService } from '../article.service';
import { Article } from '../article';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss',
})
export class ArticleComponent {
  article: Article = { id: '', title: '', author: '', img: '', content: '' };

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly articleService: ArticleService,
  ) {
    articleService
      .getArticle(route.snapshot.paramMap.get('id') as string)
      .subscribe({
        next: (value) => {
          this.article = value;
        },
        error: () => {
          router.navigate(['pagenotfound']);
        },
      });
  }
}
