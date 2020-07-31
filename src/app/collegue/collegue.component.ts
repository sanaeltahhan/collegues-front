import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../model/Collegue';
import { createCollegue } from '../mock/collegues.mock';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})

export class CollegueComponent implements OnInit {

  @Input()
  // Avant data service
  //col: CollegueComponent;
  //collegues: Collegue[] = createCollegue();
  col;


  constructor(private dataService : DataService) { }

  elementMasquee = true;

  modifier(): void {
    console.log('Modification du collegue');
    this.elementMasquee = !this.elementMasquee;
  }

  creationCollegue(): void {
    console.log('Creation d\'un nouveau collegue');
  }

  valider(): void {
    console.log('Validation des modifications');
    this.elementMasquee = !this.elementMasquee;
  }



  ngOnInit(): void {
    this.col = this.dataService.recupererCollegueCourant();
  }

}
