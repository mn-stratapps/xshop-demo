import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
// import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';
import { environment } from '../../../environments/environment';
import { Product } from "../../shared/classes/product";
import { ProductService } from "../../shared/services/product.service";
import { OrderService } from "../../shared/services/order.service";
import { Useraddress } from 'src/app/core/models/useraddress';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  isAdd:boolean = false;
  public checkoutForm:  UntypedFormGroup;
  public products: Product[] = [];
  // public payPalConfig ? : IPayPalConfig;
  public payment: string = 'Stripe';
  public amount:  any;
  public Address: Useraddress[] = [];
  checkoutProductData: any[];
  undeliveredProductData:any[];
  accessToken: any;
  address_id:any;
  stripeData:any;
  total_order_amount: any;
  EnableselectAddress=false;
  sub:Subscription
  Total_products_value: any;
  Other_charges: any;
  shipping_charge: any;
  constructor(private fb: UntypedFormBuilder,
    public productService: ProductService,
    private orderService: OrderService,
    private httpService:AuthenticationService,
    private toastrService: ToastrService,
    private router:Router) { 
      const currentUrl = this.router.url;
      if(currentUrl.includes('shop/checkout')){
        this.checkoutFromCart();
      }else if(currentUrl.includes('shop/buynow/checkout')){
        this.checkoutFromBuynow();
      }
    this.checkoutForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
      lastname: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
      phone: ['', [Validators.required, Validators.pattern('[0-9]+')]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required, Validators.maxLength(50)]],
      country: ['', Validators.required],
      town: ['', Validators.required],
      state: ['', Validators.required],
      postalcode: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.productService.cartItems.subscribe(response =>{ this.products = response});
    console.log('checkout:',this.products)
    this.getUserAddress();
  }
  checkoutFromCart(){
    const currentUser = localStorage.getItem( 'currentUser' );
    this.accessToken = JSON.parse( currentUser )['Token'];
    this.productService.checkoutCart(this.accessToken)
    .subscribe({ 
      next:(data)=>{  
        this.checkoutProductData = JSON.parse(JSON.stringify(data.order_details));
        this.total_order_amount = data.total_order_amount;     
       },
       error:(error) => {
        console.log(error)
      }
    }) 
  }
  checkoutFromBuynow() {
    // this.sub = this.productService.buynow_data.subscribe(
    //   data => {
    //     console.log(data)
    //     this.checkoutProductData = JSON.parse(JSON.stringify(data.order_details));
    //     this.total_order_amount =data.total_order_amount;
    //   }
    // )
    const currentUser = localStorage.getItem( 'currentUser' );
    this.accessToken = JSON.parse( currentUser )['Token'];
    this.productService.checkoutBuynow(this.accessToken)
    .subscribe({ 
      next:(data)=>{  
        console.log(data)
        this.checkoutProductData = JSON.parse(JSON.stringify(data));
        this.total_order_amount = data.total_order_amount;     
       },
       error:(error) => {
        console.log(error)
      }
    }) 
  }
  //add address
  addNewAddress(){
    this.isAdd = true;
  }
  getUserAddress(){
    const currentUser = localStorage.getItem( 'currentUser' );
    this.accessToken = JSON.parse( currentUser )['Token'];
    this.httpService.getUserAddress(this.accessToken)
    .subscribe({ 
      next:(data)=>{
        this.Address = data;
       },
       error:(error) => {
        console.log(error)
      }
    })    
  }
  selectAddress(){
    const Object = {
      address_id:this.address_id
    }
    this.productService.selectedAddress(this.accessToken,Object)
    .subscribe({ 
      next:(data)=>{
        console.log(data)
        // if(data[0].message ==='Address validated successfully'){
        // this.EnableselectAddress=true;
        // }
        this.checkoutProductData =  JSON.parse(JSON.stringify(data.Delivered_products));
        this.undeliveredProductData = data.Undelivered_products;
        this.total_order_amount =data.total_order_amount;
        this.Total_products_value = data.Total_products_value;
        this.Other_charges =data.Other_charges;
        this.shipping_charge = data.shipping_charge;
        if(!this.undeliveredProductData?.length){
          this.EnableselectAddress=true;
        }
       },
       error:(error) => {
        console.log(error);
        if (error.error.message === 'Delivery not available to that address'){
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Delivery not available to this address!',           
          })
        }
      }
    }) 
  }
  reviewAddress(){
   this.isAdd= false;
  }
  // getUserProducts(){
  //   this.productService.cartItems().subscribe(response =>{
  //     this.products = response
  //     console.log(this.products)
  //   } )
  // }
  public get getTotal(): Observable<number> {
    return this.productService.cartTotalAmount();
  }
  removeFromCheckout(product_id){
    this.productService.removeFromCheckout(this.accessToken,product_id)
    .subscribe({
      next:(data)=>{
        console.log(data)
        this.toastrService.success('Product removed successfully.');
        this.selectAddress();
      }
    })
    }
  checkout(){
    // const Object = {
    //   currency : "inr"
    // }
    this.productService.checkoutPayment(this.accessToken)
    .subscribe({ 
      next:(data)=>{
        this.stripeData = data
        console.log(data)
        window.open(this.stripeData.url,"_self")
        sessionStorage.setItem("stripeSession_Id", JSON.stringify(this.stripeData.id));

       },
       error:(error) => {
        console.log(error)
      }
    }) 
  }

  // Stripe Payment Gateway
  stripeCheckout() {
    var handler = (<any>window).StripeCheckout.configure({
      key: environment.stripe_token, // publishble key
      locale: 'auto',
      token: (token: any) => {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        this.orderService.createOrder(this.products, this.checkoutForm.value, token.id, this.amount);
      }
    });
    handler.open({
      name: 'Multikart',
      description: 'Online Fashion Store',
      amount: this.amount * 100
    }) 
  }

  // Paypal Payment Gateway
  private initConfig(): void {
    // this.payPalConfig = {
    //     currency: this.productService.Currency.currency,
    //     clientId: environment.paypal_token,
    //     createOrderOnClient: (data) => < ICreateOrderRequest > {
    //       intent: 'CAPTURE',
    //       purchase_units: [{
    //           amount: {
    //             currency_code: this.productService.Currency.currency,
    //             value: this.amount,
    //             breakdown: {
    //                 item_total: {
    //                     currency_code: this.productService.Currency.currency,
    //                     value: this.amount
    //                 }
    //             }
    //           }
    //       }]
    //   },
    //     advanced: {
    //         commit: 'true'
    //     },
    //     style: {
    //         label: 'paypal',
    //         size:  'small', // small | medium | large | responsive
    //         shape: 'rect', // pill | rect
    //     },
    //     onApprove: (data, actions) => {
    //         this.orderService.createOrder(this.products, this.checkoutForm.value, data.orderID, this.getTotal);
    //         console.log('onApprove - transaction was approved, but not authorized', data, actions);
    //         actions.order.get().then(details => {
    //             console.log('onApprove - you can get full order details inside onApprove: ', details);
    //         });
    //     },
    //     onClientAuthorization: (data) => {
    //         console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
    //     },
    //     onCancel: (data, actions) => {
    //         console.log('OnCancel', data, actions);
    //     },
    //     onError: err => {
    //         console.log('OnError', err);
    //     },
    //     onClick: (data, actions) => {
    //         console.log('onClick', data, actions);
    //     }
    // };
  }
  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe()
    }
  }

}
