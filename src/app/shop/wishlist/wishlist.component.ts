import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from "../../shared/services/product.service";
import { Product } from "../../shared/classes/product";
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { response } from 'express';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  public products: Product[] = [];
  accessToken: any;
  wishlistSubscription: Subscription;
  constructor(private router: Router, 
    public productService: ProductService,private toastrService: ToastrService) {
    // this.productService.wishlistItems.subscribe(response => this.products = response);
  }

  ngOnInit(){
    // this.wishlistSubscription = this.productService.wishlistProducts.subscribe(response => this.products=response)
  this.getWishlistProducts();
  }
  getWishlistProducts(){
  this.productService.wishlistItems
  // .subscribe(response => this.products = response);
  .subscribe({
    next:(data)=>{
      this.products= data;
      console.log(this.products)
    }
  })
  }

  async addToCart(product: any) {
    const status = await this.productService.addToCart(product);
    if(status) {
      this.router.navigate(['/shop/cart']);
    }
  }
  removeItem(product: any) {
    const currentUser = localStorage.getItem( 'currentUser' );
    this.accessToken = JSON.parse( currentUser )['Token'];
    this.productService.removeWishlistItem(product,this.accessToken)
    .subscribe({
      next:(data)=>{
        console.log(data)
        if(data.message === 'Removed successfully'){
          this.toastrService.success('Product removed from wishlist.');
          this.getWishlistProducts();
        }
      },
      error:(error)=>{
        console.log(error)
      }

    })
  }

}
