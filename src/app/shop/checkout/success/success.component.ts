import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Order } from '../../../shared/classes/order';
import { OrderService } from '../../../shared/services/order.service';
import { ProductService } from '../../../shared/services/product.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit, AfterViewInit{

  public orderDetails : Order = {};
  StripeID: any;
  accessToken: any;
  parentOrderId:any;
  public ImageSrc : string


  constructor(public productService: ProductService,
    private orderService: OrderService) { }

  ngOnInit(): void {	
    //this.orderService.checkoutItems.subscribe(response => this.orderDetails = response);
    this.paymentStatus();
  }
  paymentStatus(){
    const currentUser = localStorage.getItem( 'currentUser' );
    this.accessToken = JSON.parse( currentUser )['Token'];
     const stripeSession_Id = sessionStorage.getItem( 'stripeSession_Id' );
     this.StripeID = JSON.parse( stripeSession_Id );
     this.productService.paymentStatus(this.accessToken,this.StripeID)
     .subscribe({ 
      next:(data)=>{
        this.orderDetails = data
        console.log(this.orderDetails)
        this.parentOrderId = this.orderDetails?.parent_order_id
        if(this.parentOrderId){
          this.createShipment();
        }
       },
       error:(error) => {
        console.log(error)
      }
    }) 

  }
  createShipment(){
    this.productService.createShipmentOrder(this.accessToken,this.parentOrderId)
    .subscribe({ 
      next:(data)=>{
        console.log(data)
       },
       error:(error) => {
        console.log(error)
      }
    })
  }
  ngAfterViewInit() {
    
  }

}
