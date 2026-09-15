import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ResosComponent } from './components/resos-component/resos-component';
import { MagnoComponent } from './components/magno-component/magno-component';
import { RevillasComponent } from './components/revillas-component/revillas-component';  
import { LauronComponent } from './components/lauron-component/lauron-component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ResosComponent,
    MagnoComponent,
    RevillasComponent,
    LauronComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ALTF4 - S-ITWB415-EA3');
}
