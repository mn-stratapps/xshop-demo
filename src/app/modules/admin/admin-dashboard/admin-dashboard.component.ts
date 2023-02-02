import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
declare var $: any;

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
isAddProductUrl = false;
file: File = null;
constructor(private route: ActivatedRoute,
  private router: Router,private httpService:AuthenticationService){

// const currentUrl = this.router.url;
// if(currentUrl.includes('admin/addproduct')){
//   this.isAddProductUrl = true;
// }else{
//   this.isAddProductUrl = false;
// }
  }
ngOnInit(){}

addNewProduct(){
  this.isAddProductUrl = !this.isAddProductUrl;
}
onSelectFile( event ) {
  
  if (event.target.files[0].type === 'image/jpeg' || event.target.files[0].type === 'image/png') {
    if (event.target.files[0].size < 10485760) {
       
       $('#pet-upload').modal('show');
    } 
 } 

}


}
