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
import { LaptopDetailComponent } from './laptop/laptop-detail/laptop-detail.component';

const appRoutes : Routes = [
  { path: '' , component : LaptopListComponent},
  { path: 'sell-laptop' , component : LaptopListComponent},
  { path: 'add-laptop' , component : AddLaptopComponent},
  { path: 'laptop-detail/:id' , component : LaptopDetailComponent},
  { path: '**' , component : LaptopListComponent}
]
@NgModule({
  declarations: [	
    AppComponent,
    LaptopCardComponent,
    LaptopListComponent,
    NavBarComponent,
    AddLaptopComponent,
    LaptopDetailComponent
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
