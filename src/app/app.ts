import { Component, signal } from '@angular/core'; 
import { Grifin } from './grifin/grifin';

@Component({
  selector: 'app-root',
  imports: [Grifin],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('familly-guy-front'); 
}
