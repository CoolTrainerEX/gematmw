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
        const documentations = value as Documentation[];
        for (let i = 0; i < documentations.length; i++)
          this.documentations[i] = {
            date: new Date(documentations[i].date),
            content: documentations[i].content,
          };
      });
  }
}
