import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { Product } from 'src/app/shared/classes/product';

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.scss']
})
export class UserOrdersComponent implements OnInit {
  searchText="";
  myProducts: Product[] =[];
  totalItems:any;
  itemsPerPage:number;
  pageNo = 1;
  page: number = 1;
  datevalue:any;
  accessToken:any;

  constructor(private httpService:AuthenticationService){
    const currentUser = localStorage.getItem( 'currentUser' );
    this.accessToken = JSON.parse( currentUser )['Token'];
  }

  ngOnInit() {
  this.getmyOrders();

  }

  myordersPageChange(page:any){
    this.pageNo = page;
    this.getmyOrders();
    }
  getmyOrders(){
    const Obj ={
      pageno:this.pageNo,
      search_field:this.searchText,
      date:this.datevalue
    }
    if(Obj.search_field == '' || Obj.search_field == null){
      delete Obj.search_field
    }
    if(Obj.date == '' || Obj.date == null){
      delete Obj.date
    }
    this.httpService.getmyOrders(Obj,this.accessToken)
    .subscribe({ 
      next:(data:any)=>{
        this.myProducts = data.orders_data; 
        this.totalItems = data.total_products;
        this.itemsPerPage = data.products_per_page;     
        console.log(this.myProducts)
        console.log(data)
       }
    })
  }
  dateFilterorders($event:any){
    this.datevalue=$event.target.options[$event.target.options.selectedIndex].value;
    // this.searchText=value;
    this.getmyOrders();
  }
}
