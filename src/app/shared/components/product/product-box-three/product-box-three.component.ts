import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { QuickViewComponent } from "../../modal/quick-view/quick-view.component";
import { CartModalComponent } from "../../modal/cart-modal/cart-modal.component";
import { Product } from "../../../classes/product";
import { ProductService } from "../../../services/product.service";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-box-three',
  templateUrl: './product-box-three.component.html',
  styleUrls: ['./product-box-three.component.scss']
})
export class ProductBoxThreeComponent implements OnInit {

  @Input() product: Product;
  @Input() currency: any = this.productService.Currency; // Default Currency
  @Input() cartModal: boolean = false; // Default False
  
  @ViewChild("quickView") QuickView: QuickViewComponent;
  @ViewChild("cartModal") CartModal: CartModalComponent;

  constructor(private productService: ProductService,private toastrService: ToastrService) { }

  ngOnInit(): void {
  }

  addToCart(product: any) {
    this.productService.addToCart(product);
  }

  addToWishlist(product: any) {
    this.productService.addToWishlist(product)
    .subscribe({
      next:(data)=>{
        console.log(data)
        if(data.message === 'Added to wishlist'){
          this.toastrService.success('Product has been added in wishlist.');

        }
      },
      error:(error)=>{
        console.log(error)
        if (error.error.message === 'product already exists in wishlist'){
          this.toastrService.warning('Product already exists in wishlist');

        }
      }
    })
  }

  addToCompare(product: any) {
    this.productService.addToCompare(product);
  }

}
