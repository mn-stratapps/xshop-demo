import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from "../../shared/services/product.service";
import { Product } from "../../shared/classes/product";
import { response } from 'express';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public products: Product[] = [];
  accessToken: any;
  TotalAmount:any;
  constructor(public productService: ProductService) {
    // this.productService.cartItems.subscribe(response => this.products = response);
  }
  ngOnInit(): void {
    this.getUserProducts();
  }
  getUserProducts(){
    this.productService.cartItems.subscribe(response =>{
      this.products = response
      console.log(this.products)
      this.productService.setcartItems(this.products)
    } )
    this.productService.cartTotalAmount().subscribe(response =>{
      this.TotalAmount = (Math.round(response * 100) / 100).toFixed(2)
    })
    

  }

  public get getTotal(): Observable<number> {
    return this.productService.cartTotalAmount();
  }

  // Increament
  increment(product, qty = 1) {
    
  const currentUser = localStorage.getItem( 'currentUser' );
  this.accessToken = JSON.parse( currentUser )['Token'];
  this.productService.updateCartQuantity(product, qty,this.accessToken)
   .subscribe(
      {
        next:(data)=>{
          console.log(data)
          if(data.message === 'Added successfully'){
            this.getUserProducts();
          }
          
        },
        error:(error)=>{
          console.log(error);
          if(error.error.message ==='Out of stock'){
            Swal.fire({
              icon: 'warning',
              title: 'Out of stock',
              text: 'Will inform when available, Thanks!',
              width: '400px',
            })
            
          
        }
        }

      }
    )

  }

  // Decrement
  decrement(product, qty = -1) {
    const currentUser = localStorage.getItem( 'currentUser' );
    this.accessToken = JSON.parse( currentUser )['Token'];
    this.productService.updateCartQuantity(product, qty,this.accessToken)
    .subscribe(
      {
        next:(data)=>{
          console.log(data)
          if(data.message === 'Removed successfully'){
            this.getUserProducts();
          }
        },
        error:(error)=>{
          console.log(error);
      
        }

      }
    )
  }

  public removeItem(product: any) {
    const currentUser = localStorage.getItem( 'currentUser' );
    this.accessToken = JSON.parse( currentUser )['Token'];
    this.productService.removeCartItem(product,this.accessToken)
    .subscribe({
      next:(data)=>{
        console.log(data)
        if(data.message ==='Removed successfully'){
          this.getUserProducts();
        }
      },
      error:(error)=>{
        console.log(error)
      }
    })
  }

}
