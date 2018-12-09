import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  users = [{ username: "admin", password: "123" }, { username: "babak", password: "qaz" }];
  loggedInUser: any;
  

  
  constructor() { }

  doLogin(username, password) {
    this.loggedInUser = this.users.find(
      user => user.username == username && user.password == password
    );
    if (this.loggedInUser) {
      return true;
    } else {
      return false;
    };
  }
  signUp(username,password) {
      this.users.push({
          username: string;
          password: string;
      });
  }
  
  isLoggedIn(){
    if(this.loggedInUser){
      console.log("LOGGEDIN USER:", this.loggedInUser);
      return true;
    }else{
      return false;
    }
  }
  signOut() {
    this.loggedInUser=null;
  }
}
