import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-vendor-sales',
  templateUrl: './vendor-sales.component.html',
  styleUrls: ['./vendor-sales.component.scss']
})
export class VendorSalesComponent {
  salesfilerEnabled = false;
  datefieldEnabled = false;
  maxDate:any;
  next10Days: any;
  todayDate: any;
  pickup_date: any;
  pricefieldEnabled = false;
  constructor(datepipe: DatePipe,) {
    this.maxDate = datepipe.transform(new Date(), "yyyy-MM-dd");
    this.next10Days = datepipe.transform(new Date(), "yyyy-MM-dd")
    // let date = n
    this.todayDate = datepipe.transform(new Date(), "yyyy-MM-dd")
  }

}
