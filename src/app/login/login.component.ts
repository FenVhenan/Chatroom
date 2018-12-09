import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  username: string;
  password: string;
  loggedIn: boolean;


  constructor(private router :Router, private data: DataService) {
    console.log("I'm Constructor!", new Date());
    
    this.username = "";
    this.password = "";

  }
  login() {
    this.loggedIn=this.data.doLogin(this.username,this.password);
    if(this.loggedIn){
      this.router.navigateByUrl('/home');
    }
 
  }
  newuser() {
      this.router.navigateByUrl('/signup');
      
    }

  ngOnInit() {
    
  }

}
