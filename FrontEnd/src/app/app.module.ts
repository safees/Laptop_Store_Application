import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http"
import { Routes,RouterModule} from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LaptopCardComponent } from './laptop/laptop-card/laptop-card.component';
import { LaptopListComponent } from './laptop/laptop-list/laptop-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LaptopService } from './services/laptop.service';
import { AddLaptopComponent } from './laptop/add-laptop/add-laptop.component';
import { LaptopDetailComponent } from './laptop/laptop-detail/laptop-detail.component';
import { UserLoginComponent } from './user/user-login/user-login/user-login.component';
import { UserRegistrationComponent } from './user/user-registration/user-registration/user-registration.component';
import { UserServiceService } from './services/user-service.service';
import { AlertifyService } from './services/alertify.service';

const appRoutes : Routes = [
  { path: '' , component : LaptopListComponent},
  { path: 'sell-laptop' , component : LaptopListComponent},
  { path: 'add-laptop' , component : AddLaptopComponent},
  { path: 'laptop-detail/:id' , component : LaptopDetailComponent},
  { path: 'user/login' , component : UserLoginComponent},
  { path : 'user/registration' , component : UserRegistrationComponent},
  { path: '**' , component : LaptopListComponent}
]
@NgModule({
  declarations: [	
    AppComponent,
    LaptopCardComponent,
    LaptopListComponent,
    NavBarComponent,
    AddLaptopComponent,
    LaptopDetailComponent,
    UserLoginComponent,
    UserRegistrationComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    LaptopService,
    UserServiceService,
    AlertifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
