import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { NavService, Menu } from '../../services/nav.service';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public menuItems: Menu[];
  public userItems: Menu[];
  public adminItems: Menu[];
  public vendorItems: Menu[];
  public nonuserItems: Menu[];

  role_id: any;
  role_status:boolean;
  constructor(private router: Router, public navServices: NavService,
    private renderer2: Renderer2,@Inject(DOCUMENT) private _document:any) {
    this.navServices.items.subscribe(menuItems => this.menuItems = menuItems );
    this.navServices.userItems.subscribe(userItems => this.userItems = userItems );
    this.navServices.adminItems.subscribe(adminItems => this.adminItems = adminItems );
    this.navServices.vendorItems.subscribe(vendorItems => this.vendorItems = vendorItems );
    this.navServices.nonuserItems.subscribe(nonuserItems => this.nonuserItems = nonuserItems );
    this.router.events.subscribe((event) => {
      this.navServices.mainMenuToggle = false;
    });
  }

  ngOnInit(): void {
    // this.loadTranslator()
    if(localStorage.getItem('role_id')){
    this.role_id=localStorage.getItem('role_id')
    this.role_status=true;
    }
    else{
      this.role_status = false;
    }
  }

  mainMenuToggle(): void {
    this.navServices.mainMenuToggle = !this.navServices.mainMenuToggle;
  }
  // // language translator//out of theme //
  // loadTranslator(){
  //   var element = document.getElementById('gtranslate_wrapper');

  //    // if(element==null){
  //       const s = this.renderer2.createElement('script');
  //       s.type = 'text/javascript';
  //       s.src = 'https://cdn.gtranslate.net/widgets/latest/dwf.js';
  //       s.text = ``;
  //       s.id = 'gtranslate_wrapper';
  //       this.renderer2.appendChild(this._document.body, s);
  //     // }else{
  //     //   element.parentNode.removeChild(element);
  //     // }
  // }
  // Click Toggle menu (Mobile)
  toggletNavActive(item) {
    item.active = !item.active;
  }

}
