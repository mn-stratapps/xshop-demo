import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-all-products-tab',
  templateUrl: './all-products-tab.component.html',
  styleUrls: ['./all-products-tab.component.scss']
})
export class AllProductsTabComponent {
  myordersfilterEnabled =false;
  datefieldEnabled = false;
  pricefieldEnabled = false;
  maxDate:any;
  next10Days:any;
  todayDate:any;
  constructor(datepipe: DatePipe,) {
    this.maxDate = datepipe.transform(new Date(), "yyyy-MM-dd");
    this.next10Days = datepipe.transform(new Date(), "yyyy-MM-dd")
    // let date = n
    this.todayDate = datepipe.transform(new Date(), "yyyy-MM-dd")
  }

}
