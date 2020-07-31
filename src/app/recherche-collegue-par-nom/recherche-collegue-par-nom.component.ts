import { Component, OnInit, Input } from '@angular/core';
import { matricules } from '../mock/matricules.mock';


@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css']
})
export class RechercheCollegueParNomComponent implements OnInit {

  matricules = matricules;
  recherche = false;

  constructor() { }

  ngOnInit(): void {
  }

  rechercheParNom(): void{
    this.recherche = true;
  }
}
