import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-revillas-component',
  imports: [MatButtonModule],
  templateUrl: './revillas-component.html',
  styleUrl: './revillas-component.scss',
})
export class RevillasComponent {
  fullname = 'Eunice Grace O. Revillas';
  photo = '/images/revillas.jpg';
  description = '';

  showDescription() {
    this.description = 
    'I’m an IT student continuously learning web development. Even if progress takes time, I give my best effort.';
  }
}
