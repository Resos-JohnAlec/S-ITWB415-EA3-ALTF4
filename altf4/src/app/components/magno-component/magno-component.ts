import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-magno-component',
  imports: [],
  templateUrl: './magno-component.html',
  styleUrl: './magno-component.scss',
})
export class MagnoComponent {
  name = 'Bianca H. Magno';
  photo = `images/magno.jpg`;
  description = signal('');

  showDescription() {
    this.description.set(
      'I am an IT student who enjoys designing and creating UI and UX.'
    );
  }
}