import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDetailsMainSlider, ProductDetailsThumbSlider } from '../../../../shared/data/slider';
import { Product } from '../../../../shared/classes/product';
import { ProductService } from '../../../../shared/services/product.service';
import { SizeModalComponent } from "../../../../shared/components/modal/size-modal/size-modal.component";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-left-sidebar',
  templateUrl: './product-left-sidebar.component.html',
  styleUrls: ['./product-left-sidebar.component.scss']
})
export class ProductLeftSidebarComponent implements OnInit {

  public product: Product = {};
  public counter: number = 1;
  public activeSlide: any = 0;
  public selectedSize: any;
  public mobileSidebar: boolean = false;
  public active = 1;
  wishlist: any[];


  @ViewChild("sizeChart") SizeChart: SizeModalComponent;

  public ProductDetailsMainSliderConfig: any = ProductDetailsMainSlider;
  public ProductDetailsThumbConfig: any = ProductDetailsThumbSlider;
  accessToken: any;

  constructor(private route: ActivatedRoute, private router: Router,
    public productService: ProductService,private toastrService: ToastrService) {
    // this.route.data.subscribe(response => this.product = response.data);
  }

  ngOnInit(): void {
    console.log("dddd", this.product)
    this.getProductDetails();
    
  }
getProductDetails(){
  this.route.data.subscribe(response => this.product = response.data);
}

  // Get Product Color
  Color(variants) {
    const uniqColor = []
    for (let i = 0; i < Object.keys(variants).length; i++) {
      if (uniqColor.indexOf(variants[i].color) === -1 && variants[i].color) {
        uniqColor.push(variants[i].color)
      }
    }
    return uniqColor
  }

  // Get Product Size
  Size(variants) {
    const uniqSize = []
    for (let i = 0; i < Object.keys(variants).length; i++) {
      if (uniqSize.indexOf(variants[i].size) === -1 && variants[i].size) {
        uniqSize.push(variants[i].size)
      }
    }
    return uniqSize
  }

  selectSize(size) {
    this.selectedSize = size;
  }

  // Increament
  increment() {
    if (this.counter < 10) 
    this.counter++;
    
  }

  // Decrement
  decrement() {
    if (this.counter > 1) this.counter--;
  }
  // addToCartCount(){
  // console.log(this.counter);
  // }
  
  // Add to cart
  async addToCartCount(product: any) {
    const quantity = this.counter || 1;
    const currentUser = localStorage.getItem( 'currentUser' );
    this.accessToken = JSON.parse( currentUser )['Token'];
    const status = await this.productService.updateCartQuantity(product,quantity,this.accessToken)
    .subscribe(
      {
        next:(data)=>{
          console.log(data)
          
        },
        error:(error)=>{
          console.log(error);
      
        }

      }
    )
    if (status)
    {
      this.toastrService.success('Product has been added in cart.');

    }
  }

  // Buy Now
  async buyNow(product: any) {
    product.quantity = this.counter || 1;
    const status = await this.productService.addToCart(product);
    if (status)
      this.router.navigate(['/shop/checkout']);
  }

  // Add to Wishlist
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
        //this.wishlistIconData();
      },
      error:(error)=>{
        console.log(error)
        if (error.error.message === 'product already exists in wishlist'){
          this.toastrService.warning('Product already exists in wishlist');
        }
      }
    })
  }

  // Toggle Mobile Sidebar
  toggleMobileSidebar() {
    this.mobileSidebar = !this.mobileSidebar;
  }

}
