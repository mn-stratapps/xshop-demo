import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/user';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  headers: HttpHeaders;
  accessToken: any;
  refreshToken: any;
  emailActivationToken: string;
  currentUserSubject: any;
  currentUser: any;
  constructor(private router: Router,private http: HttpClient) { 
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }




  // namesUpdate(accessToken){

  // }



}
