import { Injectable } from '@angular/core';
import { matricules } from '../mock/matricules.mock';
import { createCollegue } from '../mock/collegues.mock';
import { Collegue } from '../model/Collegue'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  collegues: Collegue[] = createCollegue();


  constructor() { }

  rechercherParNom(nom: string): string[] {
    // TODO retourner une liste de matricules fictifs à partir du fichier

    return  matricules.map(m => m.matricule);

    }
    recupererCollegueCourant(): Collegue {
    // TODO retourner le collègue fictif à partir du fichier `src/app/mock/collegues.mock.ts`.
    return this.collegues[0];
    }
}
