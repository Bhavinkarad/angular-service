import { Injectable } from '@angular/core';

@Injectable()
export class FristListviewService {

  constructor() { }
 products:any[];
  getproductname()
  {
   this.products=
    [{
      picture:"/assets/fff.png",
      title:"Product1",
      price:"21.00"

    },  {
      picture:"/assets/fff.png",
      title:"Product2",
      price:"22.00"

    },{
      picture:"/assets/fff.png",
      title:"Product3",
      price:"23.00"

    }]
     return this.products;
  }

}
