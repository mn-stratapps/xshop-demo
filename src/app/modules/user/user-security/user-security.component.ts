import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-security',
  templateUrl: './user-security.component.html',
  styleUrls: ['./user-security.component.scss']
})
export class UserSecurityComponent implements OnInit{

  accessToken:any;
  error:any;
  
  constructor(private httpService:AuthenticationService){
    const currentUser = localStorage.getItem( 'currentUser' );
    if(currentUser){
    this.accessToken = JSON.parse( currentUser )['Token'];
  }
  }
  ngOnInit(): void {
    
  }
  deactivateAccount(){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, deactivate!'
    }).then((result) => {
     if(result.isConfirmed){
      this.httpService.deactivateAccount(this.accessToken)
        .subscribe(
        {
          next:(data) => {
            console.log(data);
            if(data ==='Account deactivated Successfully'){
              Swal.fire({
                icon: 'success',
                title: 'Done!',
                text: 'Dactivated Successfully',
                width: '400px',
              })
            }
            this.httpService.logout();
          },
          error:(error)=>{
            this.error = error;
            console.log(error) 
        }
      });
     }
    })
  
  }
}
