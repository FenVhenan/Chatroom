import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { DataService } from "./services/data.service";


import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";

import { LoginComponent } from './login/login.component';
import { LoginPageComponent } from './login-page/login-page.component';

import { MessengerComponent } from "./messenger/messenger.component";
import { MessageLineComponent } from "./message-line/message-line.component";
import { HomePageComponent } from "./home-page/home-page.component";

import { AboutusComponent } from "./aboutus/aboutus.component";
import { PrivacypolicyComponent } from "./privacypolicy/privacypolicy.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatListModule
} from "@angular/material";
import { SignupComponent } from './signup/signup.component';
@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    PrivacypolicyComponent,
    LoginComponent,
    LoginPageComponent,

    MessengerComponent,
    MessageLineComponent,
    HomePageComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatListModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
