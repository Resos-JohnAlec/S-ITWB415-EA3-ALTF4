import { Component, signal } from '@angular/core';
import { MemberPreview } from '../../shared/member-preview/member-preview';

@Component({
  selector: 'app-resos-component',
  imports: [MemberPreview],
  templateUrl: './resos-component.html',
  styleUrl: './resos-component.scss',
})
export class ResosComponent {
  name = signal('John Alec L. Resos');
  image = signal('./images/resos.jpg');
  role = signal('IT student · Web development');
  description = signal(
    'I am an IT student trying to learn more about web development ' +
    'and creating useful applications.',
  );
  github = signal(`https://github.com/Resos-JohnAlec`);
}

