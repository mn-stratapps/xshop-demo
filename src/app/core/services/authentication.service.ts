import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
 import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  headers: HttpHeaders;
  public currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  accessToken: any;
  refreshToken: any;
  emailActivationToken: string;
  constructor(private router: Router,private http: HttpClient)
    {
      this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
    }


  //   public get currentUserValue(): User {
  //     return this.currentUserSubject.value;
  // }

  login(username: string, password: string) {
      this.headers = new HttpHeaders().set('content-type', 'form-data')
      return this.http.post<any>(`${environment.apiUrl}/login/`, { username, password });        
  }
  
  navigateToDashboardIfUserExists(){
    try{
      if(localStorage.getItem('currentUser')){ this.router.navigate(["/home"]); }
    } catch (error) {  console.error('error' + error); }
  }

  register(user: User) {
    return this.http.post<any>(`${environment.apiUrl}/signup/`, user )  
  }
  logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('currentUser');
      //this.userSubject.next(null);
      this.router.navigate(['/core/login']);
  }
  //rest password
resetPassword(user:User) {
  this.headers = new HttpHeaders().set('content-type', '*')
  return this.http.post<any>(`${environment.apiUrl}/reset_password/`,user);
}

validatePassword( user:User) {
  return this.http.put<any>(`${environment.apiUrl}/reset_password/confirm/Token=` + user.token,user);
}

validateOtp(otp:any){
  return this.http.put<any>(`${environment.apiUrl}/a/activate/`+this.emailActivationToken,otp);
}

reactivateAccount(email:any){
  return this.http.post<any>(`${environment.apiUrl}/a/reactivate/`,email);
}

namesUpdate(user:any){
  const currentUser = localStorage.getItem( 'currentUser' );
    this.accessToken = JSON.parse( currentUser )['Token'];
  return this.http.put<any>(`${environment.apiUrl}/namesupdate/`+this.accessToken,user)

}
usernameUpdate(user:any){
  const currentUser = localStorage.getItem( 'currentUser' );
    this.accessToken = JSON.parse( currentUser )['Token'];
  return this.http.put<any>(`${environment.apiUrl}/usernameupdate/`+this.accessToken,user)
}
mobilenumberUpdate(user:any){
  const currentUser = localStorage.getItem( 'currentUser' );
    this.accessToken = JSON.parse( currentUser )['Token'];
  return this.http.put<any>(`${environment.apiUrl}/mobileupdate/`+this.accessToken,user)
}
emailUpdate(user:any){
  const currentUser = localStorage.getItem( 'currentUser' );
  this.accessToken = JSON.parse( currentUser )['Token'];
return this.http.put<any>(`${environment.apiUrl}/emailupdate/`+this.accessToken,user)
}
validateemailOtp(otp:any){
  const currentUser = localStorage.getItem( 'currentUser' );
    this.accessToken = JSON.parse( currentUser )['Token'];
  return this.http.put<any>(`${environment.apiUrl}/useremailupdate/`+this.accessToken+'/'+this.emailActivationToken,otp);
}
getUserDetails(accessToken:any){
  //this.accessToken;
  return this.http.get<any>(`${environment.apiUrl}/role/details/`+accessToken);
}
editUser(accessToken:any,data:any){
  
  return this.http.put<any>(`${environment.apiUrl}/user_profile/`+accessToken,data)
}

//vendor Api//
registerVendor(accessToken:any,data:any){
  return this.http.post<any>(`${environment.apiUrl}/vendororgregister/`+accessToken,data)

}


}