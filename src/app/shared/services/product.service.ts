import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, observable, Observable, Subject } from 'rxjs';
import { map, startWith, delay } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Product } from '../classes/product';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { response } from 'express';
import { timeStamp } from 'console';

const state = {
  // products: JSON.parse(localStorage['products'] || '[]'),
  wishlist: JSON.parse(localStorage['wishlistItems'] || '[]'),
  compare: JSON.parse(localStorage['compareItems'] || '[]'),
  cart: JSON.parse(localStorage['cartItems'] || '[]')
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public Currency = { name: 'Rupee', currency: 'INR', price: 1 } // Default Currency
  public OpenCart: boolean = false;
  public Products
  accessToken: any;
  product_id:any;
  headers: HttpHeaders;
  mediaUpdate: any;
  buynow_data = new Subject<any>();

  constructor(private http: HttpClient,public router:Router,
    private toastrService: ToastrService,private authService:AuthenticationService) { }

  /*
    ---------------------------------------------
    ---------------  Product  -------------------
    ---------------------------------------------
  */

  Product
  // private get products(): Observable<Product[]> {
  //   this.Products = this.http.get<Product[]>('assets/data/products.json').pipe(map(data => data));
  //   this.Products.subscribe(next => { localStorage['products'] = JSON.stringify(next) });
  //   return this.Products = this.Products.pipe(startWith(JSON.parse(localStorage['products'] || '[]')));
  // }

  private get products(): Observable<Product[]> {
     return this.http.get<Product[]>(`${environment.apiUrl}/products/`)
    // this.Products = this.http.get<Product[]>(`${environment.apiUrl}/products/`)
    // .pipe(map(data => data));
    //  this.Products.subscribe(next => {localStorage['products'] = JSON.stringify(next)});
    //  return this.Products = this.Products.pipe(startWith(JSON.parse(localStorage['products'] || '[]')));
    //return this.Products;
     }
  //Get Products
  public get getProducts(): Observable<Product[]> {
    return this.products;
  }

  // //Get Products By Slug
  // public getProductBySlug(slug: string): Observable<Product> {
  //   return this.products.pipe(map(items => { 
  //     return items.find((item: any) => { 
  //       return item.title.replace(' ', '-') === slug; 
  //     }); 
  //   }));
  // }
  public getProductBySlug(slug: string): Observable<Product> {
   return this.http.get(`${environment.apiUrl}/product/detail/page`+'/'+slug)
  }
///////////Product End////////////////////

checkDeliveryDate(obj){
  return this.http.put(`${environment.apiUrl}/get/est_delivery_date/`,obj)
}
  /*
    ---------------------------------------------
    ---------------  Wish List  -----------------
    ---------------------------------------------
  */

  // Get Wishlist Items

  // public get wishlistItems(): Observable<Product[]> {
  //   const itemsStream = new Observable(observer => {
  //     observer.next(state.wishlist);
  //     observer.complete();
  //   });
  //   return <Observable<Product[]>>itemsStream;
  // }
  public get  wishlistItems(): Observable<Product[]> {
    const currentUser = localStorage.getItem( 'currentUser' );
    this.accessToken = JSON.parse( currentUser )['Token'];
    return this.http.get<Product[]>(`${environment.apiUrl}/wishlist/`+this.accessToken)
  }
  private wishlistItemss = new BehaviorSubject<any>({});
  wishlitsprods = this.wishlistItemss.asObservable();
  setwishlistItems(obj: any) {
    this.wishlistItemss.next(obj);
  }
  
  private searchItems = new BehaviorSubject<any>({});
  searchItemProds = this.searchItems.asObservable();
  setSearchItems(obj:any){
    this.searchItems.next(obj);
  }
  // Add to Wishlist
  // public addToWishlist(product): any {
  //   const wishlistItem = state.wishlist.find(item => item.id === product.id)
  //   if (!wishlistItem) {
  //     state.wishlist.push({
  //       ...product
  //     })
  //   }
  //   this.toastrService.success('Product has been added in wishlist.');
  //   localStorage.setItem("wishlistItems", JSON.stringify(state.wishlist));
  //   return true
  // }

public addToWishlist(product): any {
    // const wishlistItem = state.wishlist.find(item => item.id === product.id)
    // if (!wishlistItem) {
    const id = product.id
    const currentUser = localStorage.getItem( 'currentUser' );
    this.accessToken = JSON.parse( currentUser )['Token'];
      return this.http.post<any>(`${environment.apiUrl}/wishlist/`+this.accessToken,{id})
       
    // }
    // localStorage.setItem("wishlistItems", JSON.stringify(state.wishlist));
    // return true
  }

  // Remove Wishlist items
  public removeWishlistItem(product: Product,accessToken): any {   
    let id = product.id
    this.wishlistItems.subscribe(response=>this.setwishlistItems(response))
   return this.http.delete<any>(`${environment.apiUrl}/deletewishlist/`+accessToken+'/'+id)   

    // const index = state.wishlist.indexOf(product);
    // state.wishlist.splice(index, 1);
    // localStorage.setItem("wishlistItems", JSON.stringify(state.wishlist));
    // return true
  }

  /*
    ---------------------------------------------
    -------------  Compare Product  -------------
    ---------------------------------------------
  */

  // Get Compare Items
  // public get compareItems(): Observable<Product[]> {
  //   const itemsStream = new Observable(observer => {
  //     observer.next(state.compare);
  //     observer.complete();
  //   });
  //   return <Observable<Product[]>>itemsStream;
  // }
  public get  compareItems(): Observable<Product[]> {
    const currentUser = localStorage.getItem( 'currentUser' );
    this.accessToken = JSON.parse( currentUser )['Token'];
    return this.http.get<Product[]>(`${environment.apiUrl}/comparedproductsget/`+this.accessToken)
   }
  // Add to Compare
  public addToCompare(product): any {
    const compareItem = state.compare.find(item => item.id === product.id)
    if (!compareItem) {
      state.compare.push({
        ...product
      })
    }
    this.toastrService.success('Product has been added in compare.');
    localStorage.setItem("compareItems", JSON.stringify(state.compare));
    return true
  }
    // Add to Compare API
  addToCompareApi(product:any,accessToken:any){
    let id = product.id
    return this.http.get<any>(`${environment.apiUrl}/compare/`+accessToken+'/'+id)
  }
  // Remove Compare items
  // public removeCompareItem(product: Product): any {
  //   const index = state.compare.indexOf(product);
  //   state.compare.splice(index, 1);
  //   localStorage.setItem("compareItems", JSON.stringify(state.compare));
  //   return true
  // }
  removeCompareItemApi(product:any,accessToken:any){
    let id = product.id
    return this.http.delete<any>(`${environment.apiUrl}/compare/`+accessToken+'/'+id)
  }
  getSimilarProducts(prodId:any){
    return this.http.get<any>(`${environment.apiUrl}/productdetailcomaprision/`+prodId)
  }
  /*
    ---------------------------------------------
    -----------------  Cart  --------------------
    ---------------------------------------------
  */

  // Get Cart Items
  // public get cartItems():Observable<Product[]> {

  // }
  // private get products(): Observable<Product[]> {
  //   this.Products = this.http.get<Product[]>(`${environment.apiUrl}/products/`)
  //   .pipe(map(data => data));
  //   this.Products.subscribe(next => {localStorage['products'] = JSON.stringify(next)});
  //   return this.Products = this.Products.pipe(startWith(JSON.parse(localStorage['products'] || '[]')));
  //    }

  //   public get cartItems(): Observable<Product[]> {
  //   const itemsStream = new Observable(observer => {
  //     observer.next(state.cart);
  //     observer.complete();
  //   });
  //   return <Observable<Product[]>>itemsStream;  
  // }
    public get cartItems(): Observable<Product[]> {
    const currentUser = localStorage.getItem( 'currentUser' );
    this.accessToken = JSON.parse( currentUser )['Token'];
    return this.http.get<Product[]>(`${environment.apiUrl}/cart/`+this.accessToken)
   }
   private cartItemss = new BehaviorSubject<any>({});
   productvalue = this.cartItemss.asObservable();
   setcartItems(obj: any) {
     this.cartItemss.next(obj);
   }


  //Add to Cart
  // public addToCart(product): any {
  //   const cartItem = state.cart.find(item => item.id === product.id);
  //   const qty = product.quantity ? product.quantity : 1;
  //   const items = cartItem ? cartItem : product;
  //   const stock = this.calculateStockCounts(items, qty);
    
  //   if(!stock) return false

  //   if (cartItem) {
  //       cartItem.quantity += qty    
  //   } else {
  //     state.cart.push({
  //       ...product,
  //       quantity: qty
  //     })
  //   }

  //   this.OpenCart = true; // If we use cart variation modal
  //   localStorage.setItem("cartItems", JSON.stringify(state.cart));
  //   return true;
  // }

  public addToCart(product):any{
    let id = product.id
    const cartItem = state.cart.find(item => item.id === product.id);
    const qty = product.quantity ? product.quantity : 1;
    const items = cartItem ? cartItem : product;
    const stock = this.calculateStockCounts(items, qty);
    if(!stock) return false;
    if(stock){
   //cartItem.quantity += qty 
   const currentUser = localStorage.getItem( 'currentUser' );
   if(currentUser !== null){
    this.accessToken = JSON.parse( currentUser )['Token'];
    return this.http.post<any>(`${environment.apiUrl}/cart/`+this.accessToken,{id})
    .subscribe({
      next:(data)=>{
        console.log(data)
        this.cartItems.subscribe(response=>this.setcartItems(response))
        this.toastrService.success('Added to cart');
         //this.setcartItems(product)
        // console.log('settings',this.products)

      },
      error:(error)=>{
        console.log(error)
        if(error.error.message==="Max Limit Reached")
        this.toastrService.warning('Max Limit Reached');

      }
    }) 
  }    else{
    this.router.navigate(['/core/login'])
  }
  }
    // else {
    //       state.cart.push({
    //         ...product,
    //         quantity: qty
    //       })
    //     }
      this.OpenCart = true; // If we use cart variation modal
      return true;
  }
  searchPage(data:any){
    this.headers = new HttpHeaders().set('content-type', 'multipart/form-data')
    return this.http.post<any>(`${environment.apiUrl}/search/`,data)
  }
  addToCartCount(accessToken,id,quantity){
    return this.http.put<any>(`${environment.apiUrl}/cartquantityadd/`+accessToken,{id,quantity})
  }
  checkoutCart(accessToken:any){
    return this.http.get<any>(`${environment.apiUrl}/ordercart/`+accessToken)
  }
  checkoutBuynow(accessToken:any){
    return this.http.get<any>(`${environment.apiUrl}/buynowget/`+accessToken)
  }
  selectedAddress(accessToken:any,object:any){
    return this.http.put<any>(`${environment.apiUrl}/address/`+accessToken,object)
  }
  checkoutPayment(accessToken:any){
    return this.http.get<any>(`${environment.apiUrl}/checkout/`+accessToken)
  }
  removeFromCheckout(accessToken:any,product_id:any){
    return this.http.post<any>(`${environment.apiUrl}/productremove/`+accessToken,{product_id})
  }
  paymentStatus(accessToken:any,stripeId:any){
    return this.http.get<any>(`${environment.apiUrl}/payment/`+accessToken+'/'+stripeId)
  }
  retryPayment(accessToken:any){
    return this.http.get<any>(`${environment.apiUrl}/retrypayment/`+accessToken)
  }
  createShipmentOrder(accessToken:any,oid:any){
    return this.http.get<any>(`${environment.apiUrl}/create-orders/`+accessToken+'/'+oid)
  }
  buyNow(product,quantity:number,accessToken:any){
    let product_id=product.id;
    return this.http.post<any>(`${environment.apiUrl}/buynow/`+accessToken,{product_id,quantity})

  }
  orderDetails(accessToken:any,orderitem:any){
    return this.http.post<any>(`${environment.apiUrl}/view-order_details/`+accessToken,{orderitem})
  }
  adminorderDetails(accessToken:any,orderitem:any){
    return this.http.post<any>(`${environment.apiUrl}/order/detail/page/`+accessToken,{orderitem}) 
  }
  productReviews(accessToken:any,data:any){
    this.headers = new HttpHeaders().set('content-type', 'multipart/form-data')
    return this.http.post<any>(`${environment.apiUrl}/productreview/`+accessToken,data)
  }
  getProductReviews(productid:any,pageno:any){
    return this.http.post<any>(`${environment.apiUrl}/product/detail/page/reviews`+'/'+productid,{pageno})
  }
  prodRecomendation(pid){
    return this.http.get<any>(`${environment.apiUrl}/recomendedproducts/`+pid)
  }
  requestCancellation(accessToken:any,data:any){
    return this.http.post<any>(`${environment.apiUrl}/ordercancel/`+accessToken,data)
  }
  // cancelShipmentorder(accessToken:any,oid:any){
  //   return this.http.get<any>(`${environment.apiUrl}/cancel-order/`+accessToken+'/'+oid)
  // }
  // Update Cart Quantity
  public updateCartQuantity(product: Product, quantity: number,accessToken:any){
    let id=product.id;
    // const currentUser = localStorage.getItem( 'currentUser' );
    // this.accessToken = JSON.parse( currentUser )['Token'];
   return this.http.put<any>(`${environment.apiUrl}/cartquantityadd/`+accessToken,{id,quantity})
    // .subscribe(
    //   {
    //     next:(data)=>{
    //       console.log(data)
    //     },
    //     error:(error)=>{
    //       console.log(error);
    //     }

    //   }
    // )
    // return state.cart.find((items, index) => {
    //   if (items.id === product.id) {
    //     const qty = state.cart[index].quantity + quantity
    //     const stock = this.calculateStockCounts(state.cart[index], quantity)
    //     if (qty !== 0 && stock) {
    //       state.cart[index].quantity = qty
    //     }
    //     localStorage.setItem("cartItems", JSON.stringify(state.cart));
    //     return true
    //   }
    // })
  }

    // Calculate Stock Counts
  public calculateStockCounts(product, quantity) {
    const qty = product.quantity + quantity
    const stock = product.stock
    if (stock < qty || stock == 0) {
      this.toastrService.error('You can not add more items than available. In stock '+ stock +' items.');
      return false
    }
    return true
  }

  // Remove Cart items
  public removeCartItem(product,accessToken): any {
    let id = product.id
   return this.http.delete<any>(`${environment.apiUrl}/cartdelete/`+accessToken+'/'+id)
    // const index = state.cart.indexOf(product);
    // state.cart.splice(index, 1);
    // localStorage.setItem("cartItems", JSON.stringify(state.cart));
    return true
  }

  // Total amount 
  public cartTotalAmount(): Observable<number> {
    return this.cartItems.pipe(map((product: Product[]) => {
      return product?.reduce((prev, curr: Product) => {
        let price = curr.price;
        if(curr.discount) {
          price = curr.price - (curr.price * curr.discount / 100)
        }
        return (prev + price * curr.quantity) * this.Currency.price;
      }, 0);
    }));
  }

  /*
    ---------------------------------------------
    ------------  Filter Product  ---------------
    ---------------------------------------------
  */

  // Get Product Filter
  public filterProducts(filter: any): Observable<Product[]> {
    return this.products.pipe(map(product => 
      product.filter((item: Product) => {
        if (!filter.length) return true
        const Tags = filter.some((prev) => { // Match Tags
          if (item.tags) {
            if (item.tags.includes(prev)) {
              return prev
            }
          }
        })
        return Tags
      })
    ));
  }

  // Sorting Filter
  public sortProducts(products: Product[], payload: string): any {

    if(payload === 'ascending') {
      return products.sort((a, b) => {
        if (a.id < b.id) {
          return -1;
        } else if (a.id > b.id) {
          return 1;
        }
        return 0;
      })
    } else if (payload === 'a-z') {
      return products.sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        } else if (a.title > b.title) {
          return 1;
        }
        return 0;
      })
    } else if (payload === 'z-a') {
      return products.sort((a, b) => {
        if (a.title > b.title) {
          return -1;
        } else if (a.title < b.title) {
          return 1;
        }
        return 0;
      })
    } else if (payload === 'low') {
      return products.sort((a, b) => {
        if (a.price < b.price) {
          return -1;
        } else if (a.price > b.price) {
          return 1;
        }
        return 0;
      })
    } else if (payload === 'high') {
      return products.sort((a, b) => {
        if (a.price > b.price) {
          return -1;
        } else if (a.price < b.price) {
          return 1;
        }
        return 0;
      })
    } 
  }

  /*
    ---------------------------------------------
    ------------- Product Pagination  -----------
    ---------------------------------------------
  */
  public getPager(totalItems: number, currentPage: number = 1, pageSize: number = 16) {
    // calculate total pages
    let totalPages = Math.ceil(totalItems / pageSize);

    // Paginate Range
    let paginateRange = 3;

    // ensure current page isn't out of range
    if (currentPage < 1) { 
      currentPage = 1; 
    } else if (currentPage > totalPages) { 
      currentPage = totalPages; 
    }
    
    let startPage: number, endPage: number;
    if (totalPages <= 5) {
      startPage = 1;
      endPage = totalPages;
    } else if(currentPage < paginateRange - 1){
      startPage = 1;
      endPage = startPage + paginateRange - 1;
    } else {
      startPage = currentPage - 1;
      endPage =  currentPage + 1;
    }

    // calculate start and end item indexes
    let startIndex = (currentPage - 1) * pageSize;
    let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    // create an array of pages to ng-repeat in the pager control
    let pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);

    // return object with all pager properties required by the view
    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages
    };
  }

}