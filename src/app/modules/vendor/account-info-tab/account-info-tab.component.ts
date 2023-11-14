import { Component, OnInit } from '@angular/core';
import { Metrics, VendorDetails } from 'src/app/core/models/user';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'app-account-info-tab',
  templateUrl: './account-info-tab.component.html',
  styleUrls: ['./account-info-tab.component.scss']
})
export class AccountInfoTabComponent implements OnInit {
  accessToken:any;
  vendorData: VendorDetails = new VendorDetails();
  metrics: Metrics = new Metrics();

  error:any;
  constructor(private httpService:AuthenticationService){
    const currentUser = localStorage.getItem( 'currentUser' );
    this.accessToken = JSON.parse( currentUser )['Token'];
  }

  ngOnInit(): void {
    this.getKpiDetails();
    this.getVendorDetails();
  }

  getKpiDetails(){
    this.httpService.getKpiDetails(this.accessToken)
      .subscribe({
        next:(data) =>{
           this.metrics = data;
           console.log(data);
        },
        error:(error)=>{
          this.error = error;
          
          console.log(error)       
      }
      })
  }
  getVendorDetails(){
      this.httpService.vendoraddressData(this.accessToken)
        .subscribe({
          next:(data) =>{
             this.vendorData = data[0];
             console.log(data);
          },
          error:(error)=>{
            this.error = error;
            
            console.log(error)       
        }
        })
    
  }
}
