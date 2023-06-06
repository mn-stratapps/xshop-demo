import { Component } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-failpage',
  templateUrl: './failpage.component.html',
  styleUrls: ['./failpage.component.scss']
})
export class FailpageComponent {
  accessToken: any;
  stripeData: any;

  constructor(public productService: ProductService,){}

  retryPayment(){
      const currentUser = localStorage.getItem( 'currentUser' );
      this.accessToken = JSON.parse( currentUser )['Token'];
      this.productService.retryPayment(this.accessToken)
      .subscribe({ 
        next:(data)=>{
          this.stripeData = data
          console.log(data)
          window.open(this.stripeData.url,"_self")
          sessionStorage.setItem("stripeSession_Id", JSON.stringify(this.stripeData.id));
  
         },
         error:(error) => {
          console.log(error)
        }
      }) 
  }

}
