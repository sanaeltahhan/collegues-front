import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../model/Collegue';
import { NewCollegue } from '../model/NewCollegue';
import { createCollegue } from '../mock/collegues.mock';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-creer-nouveau-collegue',
  templateUrl: './creer-nouveau-collegue.component.html',
  styleUrls: ['./creer-nouveau-collegue.component.css']
})

export class CreerNouveauCollegueComponent implements OnInit {

  @Input()
  col;

  newCollegue: NewCollegue;

  ngOnInit(): void {
    this.newCollegue = new NewCollegue();
  }


  constructor(private dataServ: DataService) { }


  /*creationCollegue(): void {
    console.log('Creation d\'un nouveau collegue');
  }*/

  creationCollegue(): void {
    if (this.newCollegue.nom !== '' && this.newCollegue.prenoms !== '') {
      this.dataServ.creerNouveauCollegue(this.newCollegue).subscribe(
        v => console.log(v),
        err => { },
        () => { }
      );
    }
  }


}
