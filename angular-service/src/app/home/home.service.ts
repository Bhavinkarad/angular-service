import { Injectable } from '@angular/core';
import {Http,Response} from "@angular/http";
import  'rxjs/add/operator/map';

@Injectable()
export class HomeService {
  private _url:string="http://localhost:8080/detail";
  
  getName():string
  {
    return "Hello";
  }

  constructor(private _http :Http) { }
  getdetail(){
    return this._http.get(this._url)
    .map((res:Response)=>res.json());
  }
}
