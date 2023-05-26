import { Component, OnInit, Input, ViewChild, SimpleChanges } from '@angular/core';
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
  @Input() wishlisProduct= [];

  @ViewChild("quickView") QuickView: QuickViewComponent;
  @ViewChild("cartModal") CartModal: CartModalComponent;
  wishlistproducts =[] as any;
  wishlist: any[];
  iswishlistproduct: boolean;
  accessToken: any;
  constructor(private productService: ProductService,private toastrService: ToastrService) { }

  
  ngOnChanges(changes:SimpleChanges){

    if(changes.wishlisProduct && this.wishlisProduct){
     this.wishlisProduct = changes.wishlisProduct.currentValue;
     this.wishlistIconData();
    }
   }

  ngOnInit(): void {
    this.wishlistIconData();

  }
  wishlistIconData(){
    if(this.wishlisProduct?.length>0){
    this.wishlist = this.wishlisProduct.filter((item:any)=>item.id==this.product.id);
    }
    if(this.wishlist?.length > 0){
      this.iswishlistproduct = true;
    }else{
      this.iswishlistproduct = false;
    }
  } 
  addToCart(product: any) {
    this.productService.addToCart(product);
  }

  addToWishlist(product: any) {
    this.productService.addToWishlist(product)
    .subscribe({
      next:(data)=>{
        console.log(data)
        this.productService.wishlistItems.subscribe(response=>this.productService.setwishlistItems(response))
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
  removeFromWishlist(product:any){
      const currentUser = localStorage.getItem( 'currentUser' );
      this.accessToken = JSON.parse( currentUser )['Token'];
      this.productService.removeWishlistItem(product,this.accessToken)
      .subscribe({
        next:(data)=>{
          console.log(data)
          this.productService.wishlistItems.subscribe(response=>this.productService.setwishlistItems(response))
          if(data.message === 'Removed successfully'){
            this.toastrService.warning('Product removed from wishlist.');
          }
        },
        error:(error)=>{
          console.log(error)
        }
  
      })
    

  }

  addToCompare(product: any) {
    this.productService.addToCompare(product);
  }

}
