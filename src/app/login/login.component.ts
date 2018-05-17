import { Component, OnInit } from '@angular/core';
import {
  Router
} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userEmail: any;
  userPassword: any;
  registeredUser;
  showErrorMsg = false;
  constructor(private router: Router) { }

  ngOnInit() {
    this.registeredUser = JSON.parse(localStorage.getItem('registered_user'));
    console.log(this.registeredUser);
  }

  onClickLoginButton() {
    console.log('login credentials >>', this.userEmail, this.userPassword);
    this.registeredUser.forEach((user) => {
      if (user.username === this.userEmail && user.password === this.userPassword) {
        const userCredentials = {'username' : this.userEmail, 'password': this.userPassword};
        localStorage.setItem('logged In User', JSON.stringify(userCredentials));
        this.router.navigate(['/getlocation']);
        this.showErrorMsg = false;
      } else {
        this.showErrorMsg = true;
      }
    });
  }

}
