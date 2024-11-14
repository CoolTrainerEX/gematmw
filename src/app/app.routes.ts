import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PeopleComponent } from './people/people.component';
import { ArticleComponent } from './article/article.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Home',
    component: HomeComponent,
  },
  {
    path: 'people',
    title: 'People',
    component: PeopleComponent,
  },
  {
    path: 'article/:id',
    title: 'Article',
    component: ArticleComponent,
  },
  {
    path: '**',
    title: 'Page not found',
    component: PageNotFoundComponent,
  },
];
