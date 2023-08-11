import { Component, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDetailsMainSlider, ProductDetailsThumbSlider } from '../../../../shared/data/slider';
import { Product } from '../../../../shared/classes/product';
import { ProductService } from '../../../../shared/services/product.service';
import { SizeModalComponent } from "../../../../shared/components/modal/size-modal/size-modal.component";
import { ToastrService } from 'ngx-toastr';
import { response } from 'express';

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
  buynowData: any[];
  productReviewsData: any[];
  iswishlistproduct: boolean = false;
  maxLength=999999;
  minLength=6;
  pincode="";
  errorMessage
  estimatedDate:any;
  productId:any;
  isValidpincode = false;
  pageno = 1;
  totalItems:any;
  itemsPerPage:number;
  page: number = 1;

  @ViewChild("sizeChart") SizeChart: SizeModalComponent;

  public ProductDetailsMainSliderConfig: any = ProductDetailsMainSlider;
  public ProductDetailsThumbConfig: any = ProductDetailsThumbSlider;
  accessToken: any;
  wishlisticon: any[];

  constructor(private route: ActivatedRoute, private router: Router,
    public productService: ProductService,private toastrService: ToastrService) {
    // this.route.data.subscribe(response => this.product = response.data);
  } 
  ngOnInit(): void {
    console.log("dddd", this.product)
    this.getProductDetails();
    this.getWishlistProducts();
  }
  validatePincode(event:any){
    if(this.pincode.length > 5){
      return false
    }
    this.isValidpincode = false;
    return true;
  }

  checkDeliveryDate(product){
    const obj={
      'pincode':this.pincode,
      'product_id' : product.id,
    };
    this.productService.checkDeliveryDate(obj)
    .subscribe({
      next:(data) =>{
        this.errorMessage = false;
        this.isValidpincode = true;
        console.log(data);
        this.estimatedDate = data;
     },
     error:(error)=>{
      this.estimatedDate = false;
      console.log(error)
      if(error.error.message === 'Delivery postcode not serviceable'){
        this.errorMessage = "Delivery postcode not serviceable"
      }else if(error.error.message === 'Length mismatch'){
        this.errorMessage = "Please Enter Valid Pincode"
      }
    }
    })
  }
  getProductDetails(){
    this.route.data.subscribe(response => this.product = response.data);
    console.log(this.product);
    this.productId = this.product.id;
    this.getReviews();   
  }
  getReviews(){
    this.productService.getProductReviews(this.productId,this.pageno)
    .subscribe({ 
      next:(data)=>{  
       console.log(data);
       this.productReviewsData = data.reviews_data;
       this.totalItems = data.total_reviews;
        this.itemsPerPage = data.reviews_per_page;  
       },
       error:(error) => {
        console.log(error)
      }
    }) 
  }
  reviewsPageChange(page:any){
    this.pageno = page;
    this.getReviews();
  }
  getWishlistProducts(){
    this.productService.wishlistItems
    .subscribe({
      next:(data)=>{
        this.wishlist= data;
        console.log(this.wishlist);
        this.wishlistIconData();
      }
    })
    }
    wishlistIconData(){
      if(this.wishlist?.length>0){
      this.wishlisticon = this.wishlist.filter((item:any)=>item.id==this.product.id);
      }
      if(this.wishlisticon?.length > 0){
        this.iswishlistproduct = true;
      }else{
        this.iswishlistproduct = false;
      }
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
    if(currentUser){
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
  } else{
    this.router.navigate(['/core/login'])
  }
  }

  // Buy Now
  async buyNow(product: any) {
    const quantity = this.counter || 1;
    const currentUser = localStorage.getItem( 'currentUser' );
    if(currentUser){
    this.accessToken = JSON.parse( currentUser )['Token'];
    const status = await this.productService.buyNow(product,quantity,this.accessToken)
    .subscribe(
      {
        next:(data)=>{
          console.log(data);
          this.buynowData = data;
          this.productService.buynow_data.next(this.buynowData)
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

  // Add to Wishlist
  addToWishlist(product: any) {
    const currentUser = localStorage.getItem( 'currentUser' );
    if(currentUser){
    this.accessToken = JSON.parse( currentUser )['Token'];
    this.productService.addToWishlist(product)
    .subscribe({
      next:(data)=>{
        console.log(data)
        // this.wishlist=data;
        this.productService.wishlistItems.subscribe(response=>this.productService.setwishlistItems(response))
        if(data.message === 'Added to wishlist'){
          this.getWishlistProducts();
          this.toastrService.success('Product added to wishlist.');
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
  }else{
    this.router.navigate(['/core/login'])
  }
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
            this.getWishlistProducts();
          }
        },
        error:(error)=>{
          console.log(error)
        }
  
      })
  }
  // Toggle Mobile Sidebar
  toggleMobileSidebar() {
    this.mobileSidebar = !this.mobileSidebar;
  }

}
