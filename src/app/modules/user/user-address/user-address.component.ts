import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Useraddress } from 'src/app/core/models/useraddress';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import Swal from 'sweetalert2';
import { Country, State, City }  from 'country-state-city';
import { HttpClient } from '@angular/common/http';
import {
  GoogleMap,
  MapInfoWindow,
  MapGeocoder,
  MapGeocoderResponse,
} from '@angular/google-maps';

@Component({
  selector: 'app-user-address',
  templateUrl: './user-address.component.html',
  styleUrls: ['./user-address.component.scss']
})
export class UserAddressComponent implements OnInit{

  isAddNewAddress = false;
  public Address: Useraddress[] = [];
  accessToken:any;
  isEditAddress : boolean;
  submitted = false;
  addAddressForm:FormGroup;
  error:any;
  countries = Country.getAllCountries();
  show: boolean = false;
  states = null;
  cities = null;
  googlemaps = false;
  ///maps//
  address = '';
  latitude!: any;
  longitude!: any;
  zoom = 12;
  maxZoom = 15;
  minZoom = 8;
  center!: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    zoomControl: true,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    mapTypeId: 'hybrid',
  };
  markers = [] as any;
  @ViewChild('search')
  public searchElementRef!: ElementRef;
  @ViewChild('myGoogleMap', { static: false })
  map!: GoogleMap;
  @ViewChild(MapInfoWindow, { static: false })
  info!: MapInfoWindow;
  // country1: string | undefined;
  // postalcode: string | undefined;
  addresses: string | undefined;
  geocountry:string;
  geopostalcode:string;
  geostate:string;
  geocity:string;
  geohno:string;
  geolandmark:string;
  geoarea:string;
  searchText="";
  datevalue:any;
  ///mapend////
  @ViewChild('country') country: ElementRef
  @ViewChild('city') city: ElementRef
  @ViewChild('state') state: ElementRef
  @ViewChild('otpModalLabel') otpModalLabel : any;
  selectedState: any;
  selectedCountry: any;
  aid: any;
  defaultAddress:boolean = false;
  ipAddress:any;
  geoData:any;
  autofill:boolean=false;
  
  constructor(private httpService:AuthenticationService,private http:HttpClient,private formBuilder:FormBuilder,
    private ngZone: NgZone, private geoCoder: MapGeocoder){
      const currentUser = localStorage.getItem( 'currentUser' );
      this.accessToken = JSON.parse( currentUser )['Token'];
  }
  ngAfterViewInit(): void {
    // Binding autocomplete to search input control
    let autocomplete = new google.maps.places.Autocomplete(
      this.searchElementRef.nativeElement
    );
    // Align search box to center
    this.map.controls[google.maps.ControlPosition.TOP_CENTER].push(
      this.searchElementRef.nativeElement
    );
    autocomplete.addListener('place_changed', () => {
      this.ngZone.run(() => {
        //get the place result
        let place: google.maps.places.PlaceResult = autocomplete.getPlace();

        //verify result
        if (place.geometry === undefined || place.geometry === null) {
          return;
        }

        console.log({ place }, place.geometry.location?.lat());

        //set latitude, longitude and zoom
        this.latitude = place.geometry.location?.lat();
        this.longitude = place.geometry.location?.lng();

        // Set marker position
        this.setMarkerPosition(this.latitude, this.longitude);

        this.center = {
          lat: this.latitude,
          lng: this.longitude,
        };
      });
    });
  }
  ngOnInit() {
    this.getUserAddress();
    this.initializeAddAddressForm();
  }
  startgeolocation(){
    this.googlemaps=true;
    this.autofill=true;
    navigator.geolocation.getCurrentPosition((position) => {
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
        
      };
      // Set marker position
      this.setMarkerPosition(this.latitude, this.longitude);
      this.getAddress(this.latitude, this.longitude);
    });

     // Binding autocomplete to search input control
     let autocomplete = new google.maps.places.Autocomplete(
      this.searchElementRef.nativeElement
    );
    // Align search box to center
    this.map.controls[google.maps.ControlPosition.TOP_CENTER].push(
      this.searchElementRef.nativeElement
    );
    autocomplete.addListener('place_changed', () => {
      this.ngZone.run(() => {
        //get the place result
        let place: google.maps.places.PlaceResult = autocomplete.getPlace();

        //verify result
        if (place.geometry === undefined || place.geometry === null) {
          return;
        }
       this.address=place.formatted_address
        console.log(place,{ place }, place.geometry.location?.lat());
        
        //set latitude, longitude and zoom
        this.latitude = place.geometry.location?.lat();
        this.longitude = place.geometry.location?.lng();

        // Set marker position
        this.setMarkerPosition(this.latitude, this.longitude);

        this.center = {
          lat: this.latitude,
          lng: this.longitude,
        };
      });
    });
  }
  setMarkerPosition(latitude: any, longitude: any) {
    // Set marker position
    this.markers = [
      {
        position: {
          lat: latitude,
          lng: longitude,
        },
        options: {
          animation: google.maps.Animation.DROP,
          draggable: true,
        },
      },
    ];
  }

  eventHandler(event: any, name: string) {
    // console.log(event, name);

    switch (name) {
      case 'mapDblclick': // Add marker on double click event
        break;

      case 'mapDragMarker':
        break;

      case 'mapDragend':
        this.getAddress(event.latLng.lat(), event.latLng.lng());
        break;

      default:
        break;
    }
  }

  getAddress(latitude: any, longitude: any) {
    this.geoCoder
      .geocode({ location: { lat: latitude, lng: longitude } })
      .subscribe((addr: MapGeocoderResponse) => {
        if (addr.status === 'OK') {
          if (addr.results[0]) {
            console.log('unformated',addr.results[0])
            this.zoom = 12;
            this.address = addr.results[0].formatted_address;
            console.log(this.address)
            for( let i=0; i< addr.results[0].address_components.length; i++){
              
              // const addrestypes = addr.results[0].address_components[0].types;
                for(let j =0;j <= addr.results[0].address_components[i].types.length ;j++){
                  let item = addr.results[0].address_components[i].types[j];
                  
                  if(item ==='country'){
                    this.geocountry = addr.results[0].address_components[i].long_name;
                    // if(this.geocountry === 'null'){
                    //   this.geocountry ="not found";
                    // }                    
                     console.log('country',this.geocountry)

                  }
                  if(item ==='postal_code'){
                    this.geopostalcode = addr.results[0].address_components[i].long_name;
                    console.log('postalcode',this.geopostalcode)
                  }
                  if(item ==='administrative_area_level_1' ){
                    this.geostate = addr.results[0].address_components[i].long_name;
                    console.log('state',this.geostate)
                  }
                  if(item ==='administrative_area_level_3'){
                    this.geocity = addr.results[0].address_components[i].long_name;
                    console.log('city',this.geocity)
                  }
                  if(item ==='plus_code'){
                    this.geohno = addr.results[0].address_components[i].long_name;
                    console.log('Hno',this.geohno)
                  }
                  if(item ==='premise'){
                    this.geohno = addr.results[0].address_components[i].long_name;
                    console.log('Hno',this.geohno)
                  }
                  if(item ==='plus_code'){
                    this.geohno = addr.results[0].address_components[i].long_name;
                    console.log('Hno',this.geohno)
                  }
                  if(item ==='subpremise'){
                    this.geohno = addr.results[0].address_components[i].long_name;
                    console.log('Hno',this.geohno)
                  }if(item ==='route'){
                    this.geohno = addr.results[0].address_components[i].long_name;
                    console.log('Hno',this.geohno)
                  }if(item ==='street_number'){
                    this.geohno = addr.results[0].address_components[i].long_name;
                    console.log('Hno',this.geohno)
                  }
                  if(item ==='sublocality_level_2'){
                    this.geoarea = addr.results[0].address_components[i].long_name;
                    console.log('Hno',this.geoarea)                  
                  }if(item ==='sublocality_level_3'){
                    this.geoarea = addr.results[0].address_components[i].long_name;
                    console.log('Hno',this.geoarea)                  
                  }if(item ==='sublocality_level_3'){
                    this.geoarea = addr.results[0].address_components[i].long_name;
                    console.log('Hno',this.geolandmark)                  
                  }if(item ==='landmark'){
                    this.geoarea = addr.results[0].address_components[i].long_name;
                    console.log('Hno',this.geoarea)                  
                  }if(item ==='sublocality_level_1'){
                    this.geoarea = addr.results[0].address_components[i].long_name;
                    console.log('Hno',this.geolandmark)                  
                  }
                }
                this.addAddressForm.patchValue({
                          country:this.geocountry == null ? "" :this.geocountry,
                          state:this.geostate,
                          pincode:this.geopostalcode,
                          city:this.geocity,
                          address:this.geohno == null? "":this.geohno,
                          area:this.geoarea == null? "":this.geoarea,
                          landmark:this.geolandmark == null?"":this.geolandmark
                        });
              }
          } else {
            //this.address = null;
            window.alert('No results found');
          }
        } else {
          //this.address = null;
          window.alert('Geocoder failed due to: ' + addr.status);
        }
      });
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
  addNewAddress(){
    this.isAddNewAddress = !this.isAddNewAddress;
    //this.addAddressForm.reset();
    this.isEditAddress = false;
     this.getIPaddress();
     this.googlemaps=false;
     this.submitted = false;
  }
  resetautofill(){
    this.autofill=false;
  }
  getIPaddress(){
    this.http.get<{ip:string}>('https://jsonip.com')
    .subscribe( data => {
      console.log(data);
      this.ipAddress = data
    })
  }
  // modalButton1(){
    onCountryChange($event): void {
      this.states = State.getStatesOfCountry(JSON.parse(this.country.nativeElement.value).isoCode);
      this.selectedCountry = JSON.parse(this.country.nativeElement.value);
      //this.cities = this.selectedState = this.selectedCity = null;
    }
  
    onStateChange($event): void {
      this.cities = City.getCitiesOfState(JSON.parse(this.country.nativeElement.value).isoCode, JSON.parse(this.state.nativeElement.value).isoCode)      // this.selectedState = JSON.parse(this.state.nativeElement.value);
      this.selectedState = JSON.parse(this.state.nativeElement.value);

      // this.selectedCity = null;
    }
    onCityChange($event): void {
     // this.selectedCity = JSON.parse(this.city.nativeElement.value)
    }
  initializeAddAddressForm(){
    this.addAddressForm = this.formBuilder.group({
        type:['',Validators.required],
        name:['',Validators.required],
        mobile:['', [Validators.required,
        Validators.pattern("^[0-9]{10}$"),
        Validators.minLength(10), Validators.maxLength(10)]],
        address:['',Validators.required],
        landmark:['',Validators.required],
        area:['',Validators.required],
        city:['',Validators.required],
        state:['',Validators.required],
        country:['',Validators.required],
        pincode:['',[Validators.required,Validators.pattern("^[0-9]{6}$$")]],
        is_default:['']
    })
    }
    get f(){
      return this.addAddressForm.controls;
    }
    onSubmit(){
      this.submitted=true;
      if(!this.isEditAddress){
      if(this.addAddressForm.invalid){
        this.addAddressForm.markAllAsTouched();
        return false;
      }else{
    
        // if(this.autofill=false){
        // this.addAddressForm.patchValue({country:this.selectedCountry.name,state:this.selectedState.name})
        // }else{
        //   this.addAddressForm.patchValue({
        //     country:this.geoData.country,
        //     state:this.geoData.regionName,
        //     pincode:this.geoData.zip,
        //     city:this.geoData.city,
        //   });
        // }
        this.addAddressForm.patchValue({country:this.selectedCountry.name,state:this.selectedState.name})
    
      this.httpService.addAddress(this.accessToken,this.addAddressForm.value).
      subscribe({
        next:(data)=>{
          console.log(data)
          if(data.message==='Address added Successfully'){
            Swal.fire({
              icon: 'success',
              title: 'Success!',
              text: 'Address added Successfully',
              width: '400px',
            })
            this.getUserAddress();
            this.isAddNewAddress = false;
            this.autofill=false;
            this.googlemaps= false;
            this.addAddressForm.reset();
            this.f.addAddressForm.markAsUntouched();
          }
        },
        error:(error) => {
          console.log(error)
        }
      })
    }}
    else if(this.isEditAddress){
      if(this.addAddressForm.invalid){
        this.addAddressForm.markAllAsTouched();
        return false;
      }else{
        this.addAddressForm.patchValue({country:this.selectedCountry.name,state:this.selectedState.name})
        
        this.httpService.editAddress(this.accessToken,this.addAddressForm.value,this.aid).
      subscribe({
        next:(data)=>{
          console.log(data)
          if(data.message === 'Updated Successfully'){
            Swal.fire({
              icon: 'success',
              title: 'Done!',
              text: 'Updated Successfully',
              width: '400px',
            })
            this.getUserAddress();
            this.isAddNewAddress = false;
          }
        },
        error:(error) => {
          console.log(error)
        }
      })
    }  
    }
    }
    
    deleteaddress(aid:any){
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
        this.httpService.deleteaddress(this.accessToken,aid)
        .subscribe(
          {
            next:(data) => {
              console.log(data);
              if(data.message ==='Address Deleted Successful'){
                Swal.fire({
                  icon: 'success',
                  title: 'Done!',
                  text: 'Deleted Successfully',
                  width: '400px',
                })
                this.getUserAddress();
              }
            },
            error:(error)=>{
              this.error = error;
              
              console.log(error) 
          }
        });
       }
      })
    
    }
    
    editaddress(address){
      this.isEditAddress = true;
      this.isAddNewAddress = true;
      const countrys = this.countries.find(item => JSON.stringify(item) === JSON.stringify(address.country));
      this.aid = address.id;
      this.addAddressForm.patchValue({
        type:address.type_id,
        name:address.name,
        mobile:address.mobile,
        address:address.address,
        landmark:address.landmark,
        area:address.area,
        city:address.city,
        state:address.state,
        country:countrys,
        pincode:address.pincode,
        is_default:false
      })
    }
}
