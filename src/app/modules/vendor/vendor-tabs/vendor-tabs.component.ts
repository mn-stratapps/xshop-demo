import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-vendor-tabs',
  templateUrl: './vendor-tabs.component.html',
  styleUrls: ['./vendor-tabs.component.scss']
})
export class VendorTabsComponent {
  VendorProductfilerEnabled = false;
  datefieldEnabled = false;
  maxDate: any;
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
