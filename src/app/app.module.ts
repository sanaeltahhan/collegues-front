import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CollegueComponent } from './collegue/collegue.component';
import { RechercheCollegueParNomComponent } from './recherche-collegue-par-nom/recherche-collegue-par-nom.component';
import { CreerNouveauCollegueComponent } from './creer-nouveau-collegue/creer-nouveau-collegue.component';

import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { MenuComponentComponent } from './menu-component/menu-component.component';
import { AccueilComponent } from './accueil/accueil.component';

import { Route, RouterModule, Routes } from '@angular/router';
import { GallerieComponent } from './gallerie/gallerie.component';
import { AProposComponent } from './apropos/apropos.component';


const ROUTES: Routes = [
  { path: 'accueil', component: AccueilComponent},
  { path: 'gallerie', component: GallerieComponent},
  { path: 'apropos', component: AProposComponent},
  //{ path: 'page3/:identifiant', component: Page3Component},
  { path: '', pathMatch: 'full', redirectTo: '/acceuil' },
];

@NgModule({
  declarations: [
    AppComponent,
    CollegueComponent,
    RechercheCollegueParNomComponent,
    CreerNouveauCollegueComponent,
    MenuComponentComponent,
    AccueilComponent,
    GallerieComponent,
    AProposComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
