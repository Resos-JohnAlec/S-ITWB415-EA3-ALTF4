import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ResosComponent } from './resos-component/resos-component';
import { MagnoComponent } from './components/magno-component/magno-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ResosComponent, MagnoComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('altf4');
}
