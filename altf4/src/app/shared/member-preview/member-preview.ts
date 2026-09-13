import { Component, input, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-member-preview',
  imports: [MatButtonModule],
  templateUrl: './member-preview.html',
  styleUrl: './member-preview.scss',
})
export class MemberPreview {
  name = input<string>('');
  image = input<string>('');
  role = input<string>('');
  description = input<string>('');
  github = input<string>('');
  
  displayDescription = signal(``);

  showDescription() {
    if (this.description()) {
      this.displayDescription.set(this.description());
    }
  }
}