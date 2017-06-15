import { Component, OnInit } from '@angular/core';

import{FristListviewService} from './frist-listview.service';

@Component({
  selector: 'app-frist-listview',
  templateUrl: './frist-listview.component.html',
  styleUrls: ['./frist-listview.component.css']
})
export class FristListviewComponent implements OnInit {

  constructor(private fristlistviewservice:FristListviewService) { }
  p ="This is List View Demo..";
 products:any[];
  

  ngOnInit():void {
    this.products=this.fristlistviewservice.getproductname();
  }

}
