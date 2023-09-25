import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User, Userlist, Metrics } from 'src/app/core/models/user';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-details',
  templateUrl: './admin-details.component.html',
  styleUrls: ['./admin-details.component.scss']
})
export class AdminDetailsComponent implements OnInit {
  userData: User = new User();
  metrics: Metrics = new Metrics();
  accessToken: any;
  error: any;

  constructor(private route: ActivatedRoute,private formBuilder:FormBuilder,
    private router: Router,private httpService:AuthenticationService,private modalService: NgbModal, datepipe:DatePipe,
    private toasterService:ToastrService){}


    ngOnInit(){
    this.getUserDetails();
    this.getdsahboardCount();
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
          
          console.log(error)       
      }
      })
    }
    getdsahboardCount(){
      const currentUser = localStorage.getItem( 'currentUser' );
      this.accessToken = JSON.parse( currentUser )['Token'];
      this.httpService.getadmindashboardCount(this.accessToken)
      .subscribe({
        next:(data) =>{
          this.metrics = data;
        },
        error:(error)=>{
          this.error = error;
          
          console.log(error)       
      }
      })
    }
}
