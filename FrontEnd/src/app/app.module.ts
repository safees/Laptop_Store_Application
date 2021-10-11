import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LaptopCardComponent } from './laptop/laptop-card/laptop-card.component';
import { LaptopListComponent } from './laptop/laptop-list/laptop-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';


@NgModule({
  declarations: [	
    AppComponent,
    LaptopCardComponent,
    LaptopListComponent,
      NavBarComponent
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
