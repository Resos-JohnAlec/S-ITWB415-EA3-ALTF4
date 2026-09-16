import { Component, signal } from '@angular/core';
import { MemberPreview } from '../../shared/member-preview/member-preview';

@Component({
  imports: [MemberPreview],
  selector: 'app-lauron-component',
  styleUrl: './lauron-component.scss',
  templateUrl: './lauron-component.html',
})
export class LauronComponent {
  name = signal('Patrick James S. Lauron');
  image = signal('./images/lauron.jpg');
  role = signal('IT student · Web development');
  description = signal(
    'I am an IT student passionate about building things for the web. ' +
    'I may not know everything yet, but I show up ready to learn.',
  );
  github = signal(`https://github.com/Lauron-PatrickJames`);
}
