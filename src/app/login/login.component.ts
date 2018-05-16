import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userEmail: any;
  userPassword: any;
  constructor() { }

  ngOnInit() {
  }

  onClickLoginButton() {
    console.log('login credentials >>', this.userEmail, this.userPassword);
    const userCredentials = {'username' : this.userEmail, 'password': this.userPassword};
    localStorage.setItem('logged In User', JSON.stringify(userCredentials));
  }

}
