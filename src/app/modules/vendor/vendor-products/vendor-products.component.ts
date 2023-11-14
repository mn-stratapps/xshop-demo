import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vendor-products',
  templateUrl: './vendor-products.component.html',
  styleUrls: ['./vendor-products.component.scss']
})
export class VendorProductsComponent implements OnInit {
  searchText="";
  pageNo = 1;
  totalItems:any;
  itemsPerPage:number;
  from_date:string;
  to_date:string;
  price_from:string;
  price_to:string;
  accessToken:any;
  vendorProducts =[] as any;
  error: any;
  maxDate:any;
  page: number = 1
  datefieldEnabled = false;
  pricefieldEnabled = false;
  vendorproductsFilterForm:FormGroup;
  vendorProductfilerEnabled = false;

  constructor(private httpService:AuthenticationService, private formBuilder:FormBuilder,private toasterService:ToastrService,
    private modalService: NgbModal,){

  }

  ngOnInit(){
    this.viewVendorProducts();
    this.allproductsFilter();
  }
  allproductsFilter(){
    this.vendorproductsFilterForm = this.formBuilder.group({
    category :[null],
    type :[null],
    price_from:[''],
    price_to:[''],
    from_date:[''],
    to_date :[''],
    name:[''],
    pageno:['']
    })
  }
  vendorProdsPageChange(page:any){
    this.pageNo = page;
    this.viewVendorProducts();
    }
    resetVendorFilters(){
    //  this.adminProductfilerEnabled = !this.adminProductfilerEnabled;
      this.searchText="";
      this.vendorproductsFilterForm.reset();
      this.pageNo = 1;
      this.viewVendorProducts();
    }
    vendorproductsSearchEvent(event: any){
      this.pageNo = 1;                  
      this.viewVendorProducts();
      }
    viewVendorProducts(){
      const currentUser = localStorage.getItem( 'currentUser' );
        this.accessToken = JSON.parse( currentUser )['Token'];    
        this.vendorproductsFilterForm.patchValue({name:this.searchText,pageno:this.pageNo})
        let formadminproductsObj = this.vendorproductsFilterForm.getRawValue();
        if(formadminproductsObj.category == '' || formadminproductsObj.category === null  ){
          delete formadminproductsObj.category;
        }
        if(formadminproductsObj.type == '' || formadminproductsObj.type === null){
          delete formadminproductsObj.type;
        }
        if(formadminproductsObj.price_from == '' || formadminproductsObj.price_from === null ){
          delete formadminproductsObj.price_from;
        }
        if(formadminproductsObj.price_to == '' || formadminproductsObj.price_to === null ){
          delete formadminproductsObj.price_to;
        }
        if(formadminproductsObj.from_date == '' || formadminproductsObj.from_date === null ){
          delete formadminproductsObj.from_date;
        }
        if(formadminproductsObj.to_date == '' || formadminproductsObj.to_date === null ){
          delete formadminproductsObj.to_date;
        }
        if(formadminproductsObj.name == '' || formadminproductsObj.name === null){
          delete formadminproductsObj.name;
        }
      this.httpService.viewVendorProducts(formadminproductsObj,this.accessToken)
      .subscribe({
        next:(data) =>{
          this.vendorProducts = data?.vendorproducts_data;
          this.totalItems = data?.total_products;
          this.itemsPerPage = data?.products_per_page;
           console.log(this.vendorProducts);
           //     this.changeDetector.detectChanges();

        },
        error:(error)=>{
          this.error = error;      
          console.log(error)  
          if(error.error.message === 'From date should be less than To date'){
            this.toasterService.warning('Date range mismatched!, Please select correct date');    
           }    
      }
      })
    }
    deleteProductByAdmin(id:any){
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
       if(result.isConfirmed){
        this.httpService.deleteProductsByAdmin(this.accessToken,id)
        .subscribe(
          {
            next:(data) => {
              console.log(data);
              if(data.message =='Product Removed Successfully'){
                Swal.fire({
                  icon: 'success',
                  title: 'Deleted!',
                  text: 'Deleted Product Successfully',
                  width: '400px',
                })
              }
              this.viewVendorProducts();
            },
            error:(error)=>{
              this.error = error;          
              console.log(error) 
          }
        });
        this.modalService.dismissAll();
       }
      })
    }
}
