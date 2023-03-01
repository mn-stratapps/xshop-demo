import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from "../../../services/product.service";
import { Product } from "../../../classes/product";

@Component({
  selector: 'app-cart-variation',
  templateUrl: './cart-variation.component.html',
  styleUrls: ['./cart-variation.component.scss']
})
export class CartVariationComponent implements OnInit, OnDestroy {

  @Input() direction: string = 'right'; // Default Direction Right

  public products: Product[] = [];
  accessToken: any;

  constructor(public productService: ProductService) {
    // this.productService.cartItems.subscribe(response => this.products = response);
  }

  ngOnInit(): void {
    this.productService.OpenCart = false;
  }

  closeCart() {
    this.productService.OpenCart = false;
  }

  get getTotal(): Observable<number> {
    return this.productService.cartTotalAmount();
  }

  removeItem(product: any) {
    const currentUser = localStorage.getItem( 'currentUser' );
    this.accessToken = JSON.parse( currentUser )['Token'];
    this.productService.removeCartItem(product,this.accessToken);
  }

  ngOnDestroy(): void {
    this.closeCart();
  }

}
