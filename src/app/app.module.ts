import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbdCarouselNavigation } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    NgbdCarouselNavigation
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [NgbdCarouselNavigation]
})
export class AppModule { }
