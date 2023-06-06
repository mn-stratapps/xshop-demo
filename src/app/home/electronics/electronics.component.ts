import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from '../../shared/classes/product';
import { ProductService } from '../../shared/services/product.service';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.scss']
})
export class ElectronicsComponent implements OnInit, OnDestroy {
  
  public themeLogo: string = 'assets/images/icon/logo-10.png'; // Change Logo

  public products: Product[] = [];
  public productCollections: any[] = [];
  public active;
  selectedField = 1;
  Previous() {
 this.selectedField = this.selectedField-1;
 }
 next() {
    this.selectedField = this.selectedField+1;
 }
  wishlistproducts: Product[];
  wishlistSubscription: Subscription;


  constructor(public productService: ProductService, public cdref: ChangeDetectorRef) {
    this.productService.getProducts.subscribe(response => {
      this.products = response.filter(item => item.type == 'Electronics');
      // Get Product Collection
      this.products.filter((item) => {
        item.collection.filter((collection) => {
          const index = this.productCollections.indexOf(collection);
          if (index === -1) this.productCollections.push(collection);
        })
      })
    });
  }

  // Collection banner
  public collections = [{
    image: 'assets/images/collection/electronics/1.jpg',
    save: '10% off',
    title: 'speaker'
  }, {
    image: 'assets/images/collection/electronics/2.jpg',
    save: '10% off',
    title: 'earplug'
  },
  {
    image: 'assets/images/collection/electronics/3.jpg',
    save: '10% off',
    title: 'best deal'
  }]

  ngOnInit(): void {
    this.wishlistSubscription = this.productService.wishlitsprods.subscribe(response => this.wishlistproducts=response)
    this.getWishlistProducts();
    // Change color for this layout
    document.documentElement.style.setProperty('--theme-deafult', '#6d7e87');
    let self = this;
    let timerID = setInterval(function() {
      // your code goes here...
      if(isNaN(self.selectedField)) { self.selectedField =0;}
      if(self.selectedField ===3) { self.selectedField =0 ;}
      ++self.selectedField;
      self.cdref.detectChanges();
    }, 3 * 1000);
    
  }


  ngOnDestroy(): void {
    // Remove Color
    document.documentElement.style.removeProperty('--theme-deafult');
  }
  getWishlistProducts(){
    this.productService.wishlistItems
    // .subscribe(response => this.products = response);
    .subscribe({
      next:(data)=>{
        this.wishlistproducts= JSON.parse(JSON.stringify(data));
        console.log(this.products)
      }
    })
    }
  // Product Tab collection
  getCollectionProducts(collection) {
    return this.products.filter((item) => {
      if (item.collection.find(i => i === collection)) {
        return item
      }
    })
  }

}
