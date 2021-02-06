import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {UsersComponent} from './users/users.component';
import {NavbarComponent} from './navbar/navbar.component';
import {TeachersComponent} from './teachers/teachers.component';
import {DashboardComponent} from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    NavbarComponent,
    TeachersComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
