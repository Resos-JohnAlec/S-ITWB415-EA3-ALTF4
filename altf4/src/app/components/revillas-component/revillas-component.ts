import { Component, signal } from '@angular/core';
import { MemberPreview } from '../../shared/member-preview/member-preview';

@Component({
  selector: 'app-revillas-component',
  imports: [MemberPreview],
  templateUrl: './revillas-component.html',
  styleUrl: './revillas-component.scss',
})
export class RevillasComponent {
  name = signal('Eunice Grace O. Revillas');
  image = signal('./images/revillas.jpg');
  role = signal('IT student · Web development');
  description = signal(
    'I’m an IT student continuously learning web development. ' + 
    'Even if progress takes time, I give my best effort.'
  );

  github = signal(`https://github.com/Revillas-EuniceGrace`);
}
