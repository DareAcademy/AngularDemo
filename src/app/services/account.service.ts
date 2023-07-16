import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SignInModel } from '../model/SignInModel';
import { SignupModel } from '../model/signupModel';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http:HttpClient) { }

  createAccount(signUp:SignupModel):Observable<any>{
    return this.http.post("http://localhost/AngularClinicDemo/api/Account/SignUp",signUp)
  }

  Login(model:SignInModel):Observable<any>{
    return this.http.post("http://localhost/AngularClinicDemo/api/Account/Login",model)
  }
}
