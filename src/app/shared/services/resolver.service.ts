import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { Product } from '../classes/product';
import { ProductService } from './product.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { promise } from 'protractor';

@Injectable({
	providedIn: 'root'
})
export class Resolver implements Resolve<Product> {
  
  public product: Product = {};
  prodId:any;
  constructor(
    private router: Router,private http: HttpClient,
    public productService: ProductService) {

    }

    async resolve(route: ActivatedRouteSnapshot): Promise<any> {
      this.prodId=route.params.id
      this.productService.getProductBySlug(this.prodId).subscribe(product => {
        if(!product) { // When product is empty redirect 404
            this.router.navigateByUrl('/pages/404', {skipLocationChange: true});
        } else {
            this.product = product
        }
      })
      await new Promise(resolve => setTimeout(resolve, 3000));    

      return this.product;
    }

  // productdata(route: ActivatedRouteSnapshot){
  //   //await new Promise(resolve => setTimeout(resolve, 1000)); 
  //   this.prodId = route.params.slug.id
  //    this.productService.getProductBySlug(route.params.slug).subscribe(product => {
  //     this.product = product
  //      return this.product;
  //    })
  // }

}
