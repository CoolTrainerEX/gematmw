import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Documentation } from '../documentation';

@Component({
  selector: 'app-documentation',
  standalone: true,
  imports: [],
  templateUrl: './documentation.component.html',
  styleUrl: './documentation.component.scss',
})
export class DocumentationComponent {
  documentations: Documentation[] = [];

  constructor(private readonly http: HttpClient) {
    http
      .get(
        'https://cooltrainerex.github.io/gematmw-articles/documentation.json',
      )
      .subscribe((value) => {
        for (const documentation of value as Documentation[]) {
          this.documentations.push({
            date: new Date(documentation.date),
            content: documentation.content,
          });
        }
      });
  }
}
