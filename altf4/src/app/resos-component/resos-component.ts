import { Component } from '@angular/core';

@Component({
  selector: 'app-resos-component',
  imports: [],
  templateUrl: './resos-component.html',
  styleUrl: './resos-component.scss',
})
export class ResosComponent {
  fullname = 'John Alec L. Resos';
  photo = '/images/resos.jpg';
  description = '';

  showDescription() {
    this.description =
      'I am an IT student trying to learn more about web development and creating useful applications.';
  }
}
