import { Collegue } from '../model/Collegue';


export function createCollegue(): Collegue[] {

  const date1 = '1995-09-21';
  const date2 = '1999-03-18';
  const collegue1 = new Collegue('1', 'Dupont', 'Marc', 'dupont.marc@hotmail.com', date1, 'https://www.benouaiche.com/wp-content/uploads/2018/12/homme-medecine-chirurgie-esthetique-dr-benouaiche-paris.jpg');
  const collegue2 = new Collegue('2', 'Boulanger', 'Sarah', 'boulanger.sarah@hotmail.com', date2, 'https://www.cogedis.com/wp-content/uploads/2019/03/egalite-salariale-homme-femme.jpg');
  const collegues: Collegue[] = [collegue1, collegue2];
  return collegues;

}
