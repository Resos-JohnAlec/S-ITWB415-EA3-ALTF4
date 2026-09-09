import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LauronComponent } from "./lauron-component/lauron-component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LauronComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('altf4');
}
