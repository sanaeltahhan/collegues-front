import { Component, OnInit, Input } from '@angular/core';
import { matricules } from '../mock/matricules.mock';

import { DataService } from '../services/data.service';


@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css']
})
export class RechercheCollegueParNomComponent implements OnInit {

  // avant utilisation de DataService
  //matricules = matricules;



  recherche = false;

  //Apres utilisation de DataService
   matricules;
  constructor( private dataService: DataService) { }



  ngOnInit(): void {
    this.matricules = this.dataService.rechercherParNom('A0056');
  }

  rechercheParNom(): void{
    this.recherche = true;
  }
}
