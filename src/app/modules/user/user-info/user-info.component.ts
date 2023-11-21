import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Metrics, User } from 'src/app/core/models/user';
import { Useraddress } from 'src/app/core/models/useraddress';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  userData: User = new User();
  metrics: Metrics = new Metrics()
  public Address: Useraddress[] = [];
  accessToken:any;
  loading: boolean;
  error:any;


  constructor(private httpService:AuthenticationService,private router:Router){
    const currentUser = localStorage.getItem( 'currentUser' );
    this.accessToken = JSON.parse( currentUser )['Token'];
  }

  ngOnInit() {
    this.getUserAddress();
    this.getUserDetails();
    this.getdashboardCount();
  }
  editdetails(){
    this.router.navigate(['/user/user-profile']);
  }
  getdashboardCount() {

    this.httpService.getdashboardCount(this.accessToken)
    .subscribe({
      next:(data) =>{
        this.metrics = data;
      },
      error:(error)=>{
        this.error = error;
        this.loading = false;
        console.log(error)       
    }
    })
  }
   getUserAddress(){
    this.httpService.getUserAddress(this.accessToken)
    .subscribe({ 
      next:(data)=>{
        this.Address = data;
        console.log(this.Address)

       },
       error:(error) => {
        console.log(error)
      }
    })    
  }
  getUserDetails() {
    this.httpService.getUserDetails(this.accessToken)
    .subscribe({
      next:(data) =>{
        this.userData = data;
         console.log(this.userData);
      },
      error:(error)=>{
        this.error = error;
        this.loading = false;
        console.log(error)       
    }
    })
  } 
}
