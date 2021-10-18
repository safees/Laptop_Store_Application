import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http"
import { Routes,RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { LaptopCardComponent } from './laptop/laptop-card/laptop-card.component';
import { LaptopListComponent } from './laptop/laptop-list/laptop-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LaptopService } from './services/laptop.service';
import { AddLaptopComponent } from './laptop/add-laptop/add-laptop.component';

const appRoutes : Routes = [
  { path: '' , component : LaptopListComponent},
  { path: 'add-laptop' , component : AddLaptopComponent}
]
@NgModule({
  declarations: [	
    AppComponent,
    LaptopCardComponent,
    LaptopListComponent,
    NavBarComponent,
    AddLaptopComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    LaptopService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
