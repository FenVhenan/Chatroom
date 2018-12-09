import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  username:string;
  password: string;
  signUp: any;

  constructor(private router :Router, private data: DataService) { }

signup(){
    this.signUp = this.data.signUp(this.username, this.password);
}

  ngOnInit() {
  }

}
