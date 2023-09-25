import { AfterContentChecked, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { ImageCropperComponent } from '../../image-cropper/image-cropper.component';
import { Dimensions, ImageCroppedEvent, ImageTransform } from '../../image-cropper/interfaces';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit {
  searchText="";
  pageNo = 1;
  totalItems:any;
  itemsPerPage:number;
  allproductsFilterForm:FormGroup;
  editProductForm:FormGroup;
  addProductForm:FormGroup;

  datefieldEnabled = false;
  pricefieldEnabled = false;
  adminProductfilerEnabled = false;

  from_date:string;
  to_date:string;
  price_from:string;
  price_to:string;
  accessToken:any;
  adminProducts =[] as any;
  error: any;
  isAddProductUrl = false;
  submitted = false;
  imagename:string;
  errorMessage: any;
  loading: boolean;
  file: any;
  path:any;
  filename:any;
  imageChangedEvent: any = '';
  imageuploaded = false;
  category: any ="";
  product_type: any=""; 
  maxDate:any;
    next10Days:any;
    todayDate:any;
    pickup_date:any;

  // category:string;
    croppedImage: any = '';
    canvasRotation = 0;
    rotation = 0;
    scale = 1;
    showCropper = false;
    containWithinAspectRatio = false;
    transform: ImageTransform = {};
    page: number = 1;
  length="";
  width="";
  height="";

@ViewChild(ImageCropperComponent) imageCropper:ImageCropperComponent;
@ViewChild('pickupModalLabel') pickupModalLabel : any;

  constructor(private httpService:AuthenticationService,private toasterService:ToastrService,private modalService: NgbModal,
    private formBuilder:FormBuilder,private changeDetector: ChangeDetectorRef, datepipe:DatePipe,){
      this.maxDate=datepipe.transform(new Date(),"yyyy-MM-dd");
this.next10Days=datepipe.transform(new Date(),"yyyy-MM-dd")
// let date = n
this.todayDate=datepipe.transform(new Date(),"yyyy-MM-dd")
const currentUser = localStorage.getItem( 'currentUser' );
this.accessToken = JSON.parse( currentUser )['Token'];
    }

  ngOnInit() {
    this.initializeeditProductForm();
    this.initializeAddProductForm();
    this.allproductsFilter();
    this.viewAdminProducts();
    
  }
  // ngAfterContentChecked(): void {
  //   this.changeDetector.detectChanges();
  // }
  initializeAddProductForm(){
    this.addProductForm=this.formBuilder.group({
      category:['',Validators.required],//mobiles,laptaps,watches
      title:['',Validators.required],
      description:['',Validators.required],
      quantity:['',Validators.required],
      price:['',Validators.required],
      discount:['',Validators.required],
      path:[''],
      type:['',Validators.required],//electronics,gadgets,accessories
      brand:['',Validators.required],
      sale:[''],//radiobutton
      new:[''],//radiobutton
      collection:['',Validators.required],//radio
      // size:[''],
      color:[''], 
      weight:[''],
      dimensions:['']
    });
  }
  initializeeditProductForm(){
    this.editProductForm=this.formBuilder.group({
      id:[''],
      category:[''],
      title:[''],
      description:[''],
      price:[''],
      discount:[''],
      dimensions:[''],
      weight:['']
    })
  }
  allproductsFilter(){
    this.allproductsFilterForm = this.formBuilder.group({
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
  get f(){
    return this.addProductForm.controls;
  }
  addNewProduct(){
    this.isAddProductUrl = !this.isAddProductUrl;
    this.submitted=false;
  }
  addProduct(){
    this.submitted=true;
    if(this.addProductForm.invalid){
      this.addProductForm.markAllAsTouched();
        return false;
    }else{
      this.submitted=true; 
      this.addProductForm.patchValue({dimensions:this.length+"X"+this.width+"X"+this.height}) 
    const currentUser = localStorage.getItem( 'currentUser' );
      this.accessToken = JSON.parse( currentUser )['Token'];
      console.log('patchvalue',this.addProductForm.get('path'));
      var formData:any = new FormData();
      formData.append("category",this.addProductForm.get('category').value);
      formData.append("title",this.addProductForm.get('title').value);
      formData.append("description",this.addProductForm.get('description').value);
      formData.append("price",this.addProductForm.get('price').value);
      formData.append("discount",this.addProductForm.get('discount').value);
      formData.append("type",this.addProductForm.get('type').value);
      formData.append("brand",this.addProductForm.get('brand').value);
      formData.append("sale",this.addProductForm.get('sale').value);
      formData.append("new",this.addProductForm.get('new').value);
      formData.append("collection",this.addProductForm.get('collection').value);
      formData.append("color",this.addProductForm.get('color').value);
      formData.append("path", this.addProductForm.get('path').value, this.imagename);
      formData.append("quantity",this.addProductForm.get('quantity').value); 
      formData.append("weight",this.addProductForm.get('weight').value);
      formData.append("dimensions",this.addProductForm.get('dimensions').value);
    this.httpService.addProduct(this.accessToken,formData)
    .subscribe(
      {
        next:(data) => {
          console.log(data);
          if(data.message =='Product Added successfully'){
            Swal.fire({
              icon: 'success',
              title: 'Congratulations!',
              text: 'Product Added Successfully',
              width: '400px',
            })
            this.viewAdminProducts();
            this.isAddProductUrl=false;
            this.editProductForm.reset();
            this.addProductForm.reset();
          }
        },
        error:(error)=>{
          this.errorMessage = error;
          this.loading = false;
      }
    });
  }
  }
  
  callimage(type:string){
    const reader = new FileReader();
    if (File.length === 0) return;
    let obj:any;
    if(type=='1')  {
     obj= {path : this.file} 
    this.addProductForm.patchValue(obj)
     console.log('file',this.file) 
    }
    // else if(type=='2'){
    //   obj ={image2 : this.file}
    // }else if(type=='3'){
    //   obj ={image3 : this.file}
    // }
    this.addProductForm.patchValue(obj)
    if(!this.file)return
    reader.readAsDataURL(this.file);
    reader.onload = _event => {
      if(type=='1')  {
      this.path = reader.result as string;
      // console.log(this.image1)
      }
      // else if(type=='2'){
      // this.image2 = reader.result as string;
      // }else if(type=='3'){
      // this.image3 = reader.result as string;
      // }
    };
    console.log(obj);
  }
  // onFileUpdate(event:any, type:string) {
  //   this.imageChangedEvent = event;
  //    const files = event.target.files[0];
  //   const reader = new FileReader();
  //    this.file = event.target.files[0];   
  // this.file=base64ToFile(this.croppedImage)
  // let croppedFile = this.croppedImage;
  // croppedFile = this.httpService.convertBase64ToFileObject(croppedFile);
  //  croppedFile = this.httpService.blobToFile(croppedFile);
  //  const obj= {path : croppedFile} 
  //  this.addProductForm.patchValue(obj)
  // console.log(obj)
  
  //   // this.callimage(type);
  // }
  onFileUpdate(event,type:string){
    const image:any = new Image();
    const file:File = event.target.files[0];
    const isSupportfile = file.type;
    if (isSupportfile === 'image/jpg' || isSupportfile === 'image/jpeg' || isSupportfile === 'image/webp' || isSupportfile === 'image/png') {
        this.imageChangedEvent = event;
    } else {
      this.showCropper = false;
    }
  }
  saveImage(){
    if(this.croppedImage!=""){
      // this.loadingcrop = true;
      let fileObj:any;
      fileObj = this.httpService.convertBase64ToFileObject(this.croppedImage);
      fileObj = this.httpService.blobToFile(fileObj);
      const obj= {path : fileObj} 
      this.addProductForm.patchValue(obj)
      console.log(obj.path.name);
      this.imagename = obj.path.name
      this.imageuploaded = true;
  }
  }
  // fileChangeEvent(event: any): void {
  //   this.imageChangedEvent = event;
  // }
  
  ////image-cropper//
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  
    //console.log(event,base64ToFile(event.base64));
  }
  
  imageLoaded() {
    this.showCropper = true;
    console.log('Image loaded');
  }
  
  cropperReady(sourceImageDimensions: Dimensions) {
    console.log('Cropper ready', sourceImageDimensions);
  }
  
  loadImageFailed() {
    console.log('Load failed');
  }
  
  rotateLeft() {
    this.canvasRotation--;
    this.flipAfterRotate();
  }
  
  rotateRight() {
    this.canvasRotation++;
    this.flipAfterRotate();
  }
  
  private flipAfterRotate() {
    const flippedH = this.transform.flipH;
    const flippedV = this.transform.flipV;
    this.transform = {
        ...this.transform,
        flipH: flippedV,
        flipV: flippedH
    };
  }
  
  
  flipHorizontal() {
    this.transform = {
        ...this.transform,
        flipH: !this.transform.flipH
    };
  }
  
  flipVertical() {
    this.transform = {
        ...this.transform,
        flipV: !this.transform.flipV
    };
  }
  
  resetImage() {
    this.scale = 1;
    this.rotation = 0;
    this.canvasRotation = 0;
    this.transform = {};
  }
  
  zoomOut() {
    this.scale -= .1;
    this.transform = {
        ...this.transform,
        scale: this.scale
    };
  }
  
  zoomIn() {
    this.scale += .1;
    this.transform = {
        ...this.transform,
        scale: this.scale
    };
  }
  
  toggleContainWithinAspectRatio() {
    this.containWithinAspectRatio = !this.containWithinAspectRatio;
  }
  
  updateRotation() {
    this.transform = {
        ...this.transform,
        rotate: this.rotation
    };
  }
  //image-cropper-end//
  adminProdsPageChange(page:any){
    this.pageNo = page;
    this.viewAdminProducts();
    }
    resetAdminFilters(){
    //  this.adminProductfilerEnabled = !this.adminProductfilerEnabled;
      this.searchText="";
      this.allproductsFilterForm.reset();
      this.pageNo = 1;
      this.viewAdminProducts();
    }
    adminproductsSearchEvent(event: any){
      this.pageNo = 1;
      this.viewAdminProducts();
      }
    viewAdminProducts(){
      const currentUser = localStorage.getItem( 'currentUser' );
        this.accessToken = JSON.parse( currentUser )['Token'];    
        this.allproductsFilterForm.patchValue({name:this.searchText,pageno:this.pageNo})
        let formadminproductsObj = this.allproductsFilterForm.getRawValue();
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
      this.httpService.viewAdminProducts(formadminproductsObj,this.accessToken)
      .subscribe({
        next:(data) =>{
          this.adminProducts = data?.adminproducts_data;
          this.totalItems = data?.total_products;
          this.itemsPerPage = data?.products_per_page;
           console.log(this.adminProducts);
                this.changeDetector.detectChanges();

        },
        error:(error)=>{
          this.error = error;      
          console.log(error)  
          // if(error.error.message === 'Details Not Found') {
          //   Swal.fire({
          //     icon: 'warning',
          //     title: 'No Data!',
          //     text: 'No Products found Please Add products',
          //     width: '400px',
          //   })
          //   this.isAddProductUrl = true;
          // } 
          if(error.error.message === 'From date should be less than To date'){
            this.toasterService.warning('Date range mismatched!, Please select correct date');    
           }    
      }
      })
    }
    openModal(exampleModalLabel, products){
      this.modalService.open(exampleModalLabel,);
    this.editProductForm.patchValue({
      id:products.id,
      category:products.category,
      title:products.title,
      description:products.description,
      price:products.price,
      discount:products.discount,
      weight:products.weight,
    })
    }
    editProduct(){
      this.editProductForm.patchValue({dimensions:this.length+"X"+this.width+"X"+this.height}) 
       this.httpService.editProductByAdmin(this.accessToken,this.editProductForm.value.id,this.editProductForm.value)
       .subscribe(
        {
          next:(data) => {
            console.log(data);
            if(data.message ==='Product Details Updated successfully'){
              Swal.fire({
                icon: 'success',
                title: 'Congratulations!',
                text: 'Updated Product Successfully',
                width: '400px',
              })
            }
            this.viewAdminProducts();
          },
          error:(error)=>{
            this.error = error;  
            console.log(error);
            if(error.error.message === 'From date should be less than To date'){
              this.toasterService.warning('Date range mismatched!, Please select correct date');    
             }
        }
      });
      this.modalService.dismissAll();
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
              this.viewAdminProducts();
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
