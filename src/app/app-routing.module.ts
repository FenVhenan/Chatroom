import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import {SignupComponent} from './signup/signup.component';
const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'privacy', component: PrivacypolicyComponent },
  {path: 'signup', component: SignupComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];
@NgModule({

  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
