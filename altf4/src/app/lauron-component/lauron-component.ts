import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-lauron-component',
  styleUrl: './lauron-component.scss',
  templateUrl: './lauron-component.html',
})
export class LauronComponent {
  fullname = 'Patrick James S. Lauron';
  photo = 'assets/images/lauron.jpg';
  description = '';

  showDescription() {
    this.description =
      'I am an IT student passionate about building things for the web. I may not know everything yet, but I show up ready to learn.';
  }
}
