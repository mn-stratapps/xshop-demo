import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/shared/classes/product';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-user-wishlist',
  templateUrl: './user-wishlist.component.html',
  styleUrls: ['./user-wishlist.component.scss']
})
export class UserWishlistComponent implements OnInit{
  wishlistProducts: Product[] = [];

  constructor(public productService:ProductService,private router: Router,){

  }

  ngOnInit() {
    this.getWishlistProducts();

  }
  getWishlistProducts(){
    this.productService.wishlistItems.subscribe(response => this.wishlistProducts = response);
  // this.httpService.getmywishlist(this.accessToken)
   // .subscribe({ 
   //   next:(data:any)=>{
   //     this.wishlistProducts = data.wishlist_data;
      
   //     console.log(this.myProducts)

   //    }
   // })
 }
 async addToCart(product: any) {
  const status = await this.productService.addToCart(product);
  if(status) {
    this.router.navigate(['/shop/cart']);
  }
}
}
