import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit{
  userData: User = new User();
  loading: boolean;
  accessToken: any;
  error: any;

constructor(private httpService:AuthenticationService,){}

ngOnInit(){
  this.getUserDetails();
}

logoutfromDashboard(){
  this.httpService.logout();
}
getUserDetails() {
  const currentUser = localStorage.getItem( 'currentUser' );
  this.accessToken = JSON.parse( currentUser )['Token'];
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
