import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../../shared/classes/product';
import { ProductService } from '../../../../shared/services/product.service';
import { Resolver } from 'src/app/shared/services/resolver.service';

@Component({
  selector: 'app-related-product',
  templateUrl: './related-product.component.html',
  styleUrls: ['./related-product.component.scss']
})
export class RelatedProductComponent implements OnInit {
  
  @Input() type: string

  public products: Product[] = [];
  product_id:any;
  constructor(public productService: ProductService, public resolver:Resolver) { 
    // this.productService.getProducts.subscribe(response => 
    //   this.products = response.filter(item => item.type == this.type)
    // );

  }

  ngOnInit(): void {
    this.product_id = this.resolver.prodId
    this.productService.prodRecomendation(this.product_id)
    .subscribe({ 
      next:(data)=>{  
       console.log(data);
       this.products = data;
     console.log('recomended:',this.products)
       },
       error:(error) => {
        console.log(error)
      }
    }) 
  }

}
