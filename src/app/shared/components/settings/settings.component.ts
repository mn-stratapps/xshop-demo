import { Component, OnInit, Injectable, PLATFORM_ID, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Observable, Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { ProductService } from "../../services/product.service";
import { Product } from "../../classes/product";
import { response } from 'express';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  public products: Product[] = [];
  public search: boolean = false;
  
  public languages = [{ 
    name: 'English',
    code: 'en'
  }, {
    name: 'French',
    code: 'fr'
  }];

  public currencies = [{
    name: 'Euro',
    currency: 'EUR',
    price: 0.90 // price of euro
  }, {
    name: 'Rupees',
    currency: 'INR',
    price: 70.93 // price of inr
  }, {
    name: 'Pound',
    currency: 'GBP',
    price: 0.78 // price of euro
  }, {
    name: 'Dollar',
    currency: 'USD',
    price: 1 // price of usd
  }]
  accessToken: any;
  producSubscription: Subscription;

  constructor(@Inject(PLATFORM_ID) private platformId: Object,
  private renderer2: Renderer2,@Inject(DOCUMENT) private _document:any,
    private translate: TranslateService,
    public productService: ProductService) {
  }

  ngOnInit() {
   // this.productService.cartItems.subscribe(response => this.products = response);
  this.producSubscription = this.productService.productvalue.subscribe(response => this.products=response)
  this.loadTranslator();
  }
  loadTranslator(){
    var element = document.getElementById('gtranslate_wrapper');

     // if(element==null){
        const s = this.renderer2.createElement('script');
        s.type = 'text/javascript';
        s.src = 'https://cdn.gtranslate.net/widgets/latest/dwf.js';
        s.text = ``;
        s.id = 'gtranslate_wrapper';
        this.renderer2.appendChild(this._document.body, s);
      // }else{
      //   element.parentNode.removeChild(element);
      // }
  }
ngOnDestroy(){
  if(this.producSubscription){
  this.producSubscription?.unsubscribe();
  }
}
  searchToggle(){
    this.search = !this.search;
  }

  changeLanguage(code){
    if (isPlatformBrowser(this.platformId)) {
      this.translate.use(code)
    }
  }

  get getTotal(): Observable<number> {
    return this.productService.cartTotalAmount();
  }

  removeItem(product: any) {
    const currentUser = localStorage.getItem( 'currentUser' );
    this.accessToken = JSON.parse( currentUser )['Token'];
    this.productService.removeCartItem(product,this.accessToken);
  }

  changeCurrency(currency: any) {
    this.productService.Currency = currency
  }

}
