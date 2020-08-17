import { Injectable } from '@angular/core';
import { matricules } from '../mock/matricules.mock';
import { createCollegue } from '../mock/collegues.mock';
import { Collegue } from '../model/Collegue';
import { NewCollegue } from '../model/NewCollegue';
import { Observable, from, interval, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import {HttpHeaders} from "@angular/common/http";



@Injectable({
  providedIn: 'root'
})
export class DataService {

  collegues: Collegue[] = createCollegue();


  subjectColSelectionne = new Subject<Collegue>();

   httpOptions = {
    headers: new HttpHeaders({
    "Content-Type": "application/json"
    })
    };



  constructor(private http: HttpClient) { }

  rechercherParNom(nom: string): string[] {
    // TODO retourner une liste de matricules fictifs à partir du fichier

    return  matricules.map(m => m.matricule);

    }
    recupererCollegueCourant(): Collegue {
    // TODO retourner le collègue fictif à partir du fichier `src/app/mock/collegues.mock.ts`.
    return this.collegues[0];
  }

  // 7. Envoyer la saisie vers la Web API (requête HTTP)

  creerNouveauCollegue(newCollegue: NewCollegue): Observable<NewCollegue> {
    return this.http.post<NewCollegue>(`https://robin-collegue-app.herokuapp.com/collegues`, newCollegue, this.httpOptions);
  }

}
