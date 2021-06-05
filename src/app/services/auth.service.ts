import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  signUp(data:any):Observable<any> {
    return this.http.post(`http://127.0.0.1:5000/api/user/register`, data);
  }

  signIn(data:any):Observable<any>{
    return this.http.post(`http://127.0.0.1:5000/api/user/login`, data);
  }

  mailConfirmation(data:any):Observable<any>{
    return this.http.post(`http://127.0.0.1:5000/api/user/notification`,data);
  }

  forgotPassMail(data:any):Observable<any>{
    return this.http.post(`http://127.0.0.1:5000/api/user/forgotPassword`, data);
  }

  currentToken(token:any):Observable<any>{
    return this.http.get(`http://127.0.0.1:5000/api/user/reset/${token}`);
  }

  initToken(token:any, data:any):Observable<any>{
    return this.http.post(`http://127.0.0.1:5000/api/user/reset/${token}`, data);
  }
}
