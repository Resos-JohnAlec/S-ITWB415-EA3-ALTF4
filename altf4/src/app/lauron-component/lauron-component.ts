import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  imports: [MatButtonModule],
  selector: 'app-lauron-component',
  styleUrl: './lauron-component.scss',
  templateUrl: './lauron-component.html',
})
export class LauronComponent {
  fullname = 'Patrick James S. Lauron';
  photo = '/images/lauron.jpg';
  description = '';

  showDescription() {
    this.description =
      'I am an IT student passionate about building things for the web. I may not know everything yet, but I show up ready to learn.';
  }
}
