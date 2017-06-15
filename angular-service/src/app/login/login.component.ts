import { Component, OnInit } from '@angular/core';
import { Login } from "./login";
import{LoginService} from "./login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  _login: Login = new Login();
  fristname: string;

  constructor(private _loginservice : LoginService) { }

  ngOnInit() {
  }

  login() {
    this.fristname = this._login.emailaddress;
    console.log(this._login);
   
  }

}
