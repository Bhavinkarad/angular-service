import { Component, OnInit } from '@angular/core';

import{HomeService}from './home.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

name:string;
detail=[];


constructor(private homeservice :HomeService) {

    
   }

  ngOnInit() {
    this.name=this.homeservice.getName();
    this.homeservice.getdetail().subscribe(res=>this.detail=res);
    
    
  
  }

}
