import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
    @Output() login: EventEmitter<any> = new EventEmitter<any>();
    constructor() {
        
    }
    
  ngOnInit() {
  }
  getLoginResult(event) {
      this.login.emit('Click from nested component');
  }

}
