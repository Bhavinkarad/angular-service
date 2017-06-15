import { Injectable } from '@angular/core';
import {Http,Request} from "@angular/http";
import  'rxjs/add/operator/map';

@Injectable()
export class LoginService {
 private _url:string="http://localhost:8080/detail";
  
  constructor(private _http :Http) { }

  setLogin(){
 return ;
    //.map((req:Request=>req.json());

  }

}
