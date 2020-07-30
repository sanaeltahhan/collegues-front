import { Component } from '@angular/core';
import { Collegue } from './model/Collegue';
import { createCollegue } from './mock/collegues.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'collegues-front';
  collegues: Collegue[] = createCollegue();
}
