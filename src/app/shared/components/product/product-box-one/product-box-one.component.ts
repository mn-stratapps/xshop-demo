import { Component, OnInit, Input, ViewChild, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { QuickViewComponent } from "../../modal/quick-view/quick-view.component";
import { CartModalComponent } from "../../modal/cart-modal/cart-modal.component";
import { Product } from "../../../classes/product";
import { ProductService } from "../../../services/product.service";
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-box-one',
  templateUrl: './product-box-one.component.html',
  styleUrls: ['./product-box-one.component.scss']
})
export class ProductBoxOneComponent implements OnInit {

  @Input() product: Product;
  @Input() currency: any = this.productService.Currency; // Default Currency 
  @Input() thumbnail: boolean = false; // Default False 
  @Input() onHowerChangeImage: boolean = false; // Default False
  @Input() cartModal: boolean = false; // Default False
  @Input() loader: boolean = false;
  @Input() wishlisProduct= [];
  @Output() wishlistChange = new EventEmitter();


  
  @ViewChild("quickView") QuickView: QuickViewComponent;
  @ViewChild("cartModal") CartModal: CartModalComponent;

  public ImageSrc : string
  accessToken: any;
  wishlistproducts =[] as any;
  wishlist: any[];
  iswishlistproduct: boolean;
  constructor(private productService: ProductService,private toastrService: ToastrService) { }
  
    ngOnChanges(changes:SimpleChanges){

     if(changes.wishlisProduct && this.wishlisProduct){
      this.wishlisProduct = changes.wishlisProduct.currentValue;
      this.wishlistIconData();
     }
    }


  ngOnInit(): void {
    if(this.loader) {
      setTimeout(() => { this.loader = false; }, 2000); // Skeleton Loader
    }
    this.wishlistIconData();
  }
 
  wishlistIconData(){
    if(this.wishlisProduct?.length>0){
    this.wishlist = this.wishlisProduct.filter((item:any)=>item.id==this.product.id);
    }
    if(this.wishlist?.length > 0){
      this.iswishlistproduct = true;
    }
  } 

  
  // Get Product Color
  Color(variants) {
    const uniqColor = [];
    for (let i = 0; i < Object.keys(variants).length; i++) {
      if (uniqColor.indexOf(variants[i].color) === -1 && variants[i].color) {
        uniqColor.push(variants[i].color)
      }
    }
    return uniqColor
  }

  // Change Variants
  ChangeVariants(color, product) {
    product.variants.map((item) => {
      if (item.color === color) {
        product.images.map((img) => {
          if (img.image_id === item.image_id) {
            this.ImageSrc = img.src;
          }
        })
      }
    })
  }

  // Change Variants Image
  ChangeVariantsImage(src) {
    this.ImageSrc = src;
  }
  addToCart(product_id: any) {
    
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
  }
  addToWishlist(product: any) {
    this.productService.addToWishlist(product)
    .subscribe({
      next:(data)=>{
        console.log(data)
        this.wishlist=data;
        this.productService.wishlistItems.subscribe(response=>this.productService.setwishlistItems(response))
        if(data.message === 'Added to wishlist'){
          this.toastrService.success('Product has been added in wishlist.');
        }
        this.wishlistIconData();
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
