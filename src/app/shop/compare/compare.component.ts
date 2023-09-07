import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from "../../shared/services/product.service";
import { Product } from "../../shared/classes/product";
import { ToastrService } from 'ngx-toastr';
import { response } from 'express';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss']
})
export class CompareComponent implements OnInit {

  public products: Product[] = [];
  accessToken:any;

  constructor(private router: Router, 
    public productService: ProductService,private toastrService: ToastrService) {
    // this.productService.compareItems.subscribe(response => this.products = response);
  }

  ngOnInit(): void {
    this.getCompareProducts();
  }
  getCompareProducts(){
    this.productService.compareItems.subscribe(response =>{
      this.products = response;
      console.log(this.products)
    } )
  }

  // async addToCart(product: any) {
  //   const status = await this.productService.addToCart(product);
  //   if(status) {
  //     this.router.navigate(['/shop/cart']);
  //   }
  // }
  addToCart(product_id: any) {
    const currentUser = localStorage.getItem( 'currentUser' );
    if(currentUser){
    this.accessToken = JSON.parse( currentUser )['Token'];
    this.productService.addToCart(product_id )
    .subscribe(
      {
        next:(data)=>{
          console.log(data);
          //localStorage.setItem("cartItems", JSON.stringify(state.cart));
          // this.productService.setcartItems(this.product)
          return true;
        },
        error:(error)=>{
          console.log(error)
        }
      }
    )
    }else{
      this.router.navigate(['/core/login'])
    }
  }

    // Buy Now
    async buyNow(product: any) {
      const quantity =  1;
      const currentUser = localStorage.getItem( 'currentUser' );
      if(currentUser){
      this.accessToken = JSON.parse( currentUser )['Token'];
      const status = await this.productService.buyNow(product,quantity,this.accessToken)
      .subscribe(
        {
          next:(data)=>{
            console.log(data);
            //this.buynowData = data;
            this.productService.buynow_data.next(data)
          },
          error:(error)=>{
            console.log(error);      
          }
        }
      )
      if (status){
        this.router.navigate(['/shop/buynow/checkout']);
      }
    }else{
        this.router.navigate(['/core/login']) 
        }
    }
  // removeItem(product: any) {
  //   this.productService.removeCompareItem(product);
  // }

  removeCompareItemApi(product: any) {
    const currentUser = localStorage.getItem( 'currentUser' );
    if(currentUser){
    this.accessToken = JSON.parse( currentUser )['Token'];
    this.productService.removeCompareItemApi(product,this.accessToken)
    .subscribe({
      next:(data)=>{
        console.log(data)
        this.productService.wishlistItems.subscribe(response=>this.productService.setwishlistItems(response))
        if(data.message === 'Removed successfully'){
          this.toastrService.success('Product has been removed from compare.');
          this.getCompareProducts();
        }
      },
      error:(error)=>{
        console.log(error)
      }  
    }) 
    }
  }
}
