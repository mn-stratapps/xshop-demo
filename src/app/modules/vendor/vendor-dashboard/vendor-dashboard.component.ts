import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor-dashboard',
  templateUrl: './vendor-dashboard.component.html',
  styleUrls: ['./vendor-dashboard.component.scss']
})
export class VendorDashboardComponent implements OnInit{
  myProducts:string;
  ngOnInit(){
  }
  constructor( public router: Router,private location:Location){
  
  }
  // activateTab(url:string,tab:any){
  //   this.myProducts = tab;
  //   this.location.replaceState(url);
  // }

}
