import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../model/Collegue';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})

export class CollegueComponent implements OnInit {

  @Input()
  col: CollegueComponent;
  constructor() { }

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
  }

}
