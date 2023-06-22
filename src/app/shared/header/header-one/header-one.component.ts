import { Component, OnInit, Input, HostListener } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
@Component({
  selector: 'app-header-one',
  templateUrl: './header-one.component.html',
  styleUrls: ['./header-one.component.scss']
})
export class HeaderOneComponent implements OnInit {
  
  @Input() class: string;
  @Input() themeLogo: string = 'assets/images/icon/xshop.png'; // Default Logo
  @Input() topbar: boolean = true; // Default True
  @Input() sticky: boolean = false; // Default false
  
  public stick: boolean = false;
  isUserLogin:boolean;
  displayName:any;
  constructor(public authservice:AuthenticationService) { }

  ngOnInit(): void {
  this.isUserLoggedin();
  }


  // @HostListener Decorator
  @HostListener("window:scroll", [])
  onWindowScroll() {
    let number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  	if (number >= 150 && window.innerWidth > 400) { 
  	  this.stick = true;
  	} else {
  	  this.stick = false;
  	}
  }
  isUserLoggedin(){
    let currentUser  = localStorage.getItem('currentUser');
    //this.isUserLogin = JSON.parse(currentUser).isLoggedin;

    if(!currentUser){
      this.isUserLogin=false;
    }
    if(currentUser){
      this.isUserLogin=true;
       this.displayName = localStorage.getItem( 'user_name' ).replace(/\"/g, "");

    }
  }
  logout(){
    this.authservice.logout();
  }

}
