import { Component } from '@angular/core';
import { Collegue } from './model/Collegue';
import { createCollegue } from './mock/collegues.mock';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor( private dataService: DataService) {}
  title = 'collegues-front';
  //collegues: Collegue[] = createCollegue();
  //collegues;

  /*ngOnInit(): void {
    this.collegues = this.dataService.recupererCollegueCourant();
  }*/

}
