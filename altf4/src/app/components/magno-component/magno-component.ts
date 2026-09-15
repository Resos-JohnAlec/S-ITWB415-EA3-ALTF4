import { Component, signal } from '@angular/core';
import { MemberPreview } from '../../shared/member-preview/member-preview';

@Component({
  selector: 'app-magno-component',
  imports: [MemberPreview],
  templateUrl: './magno-component.html',
  styleUrl: './magno-component.scss',
})
export class MagnoComponent {
  name = signal('Bianca Lauryn H. Magno');
  image = signal('images/magno.jpg');
  role = signal('IT student · Web development');
  description = signal(
    'I am an IT student who enjoys designing and creating UI and UX.',
  );
  github = signal('https://github.com/MagnoBiancaLauryn');
}