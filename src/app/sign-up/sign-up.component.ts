import { Component, OnInit } from '@angular/core';

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
  userInfo;
  isValidPsw = false;
  constructor() { }

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
    if (this.userPassword === this.userConfirmPassword) {
      this.registeredUsers.push(user);
      console.log(this.registeredUsers);
      localStorage.setItem('registered_user', JSON.stringify(this.registeredUsers));
    }
  }
  checkPassword() {
    this.isValidPsw = true;
  }
}
