import { Component, OnInit } from '@angular/core';
import {
  Router
} from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  registeredUsers = [];
  userName;
  userEmail;
  userPassword;
  userConfirmPassword;
  userRole;
  userPhone;
  isValidPsw = true;
  constructor(private routePath: Router) { }

  ngOnInit() {
  }

  onClickSignUp() {

    const user = {
      'username': this.userName,
      'useremail': this.userEmail,
      'password': this.userPassword,
      'phoneno': this.userPhone,
      'role': this.userRole
    };
    this.registeredUsers = JSON.parse(localStorage.getItem('registered_user'));

    if (this.registeredUsers === null) {
      this.registeredUsers = [];
    }
    this.registeredUsers.push(user);
    console.log(this.registeredUsers);
    localStorage.setItem('registered_user', JSON.stringify(this.registeredUsers));
    this.userName = '';
    this.userEmail = '';
    this.userPassword = '';
    this.userConfirmPassword = '';
    this.userRole = '';
    this.userPhone = '';
    this.routePath.navigate(['/']);

  }
  checkPassword() {
    if (this.userPassword === this.userConfirmPassword) {
      this.isValidPsw = true;
    } else {
      this.isValidPsw = false;
    }
  }
}
