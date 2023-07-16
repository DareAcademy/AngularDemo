import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignInModel } from '../model/SignInModel';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form!:FormGroup;
  constructor(private formBuilder:FormBuilder,
    private accountService:AccountService,
    private router:Router){}
  ngOnInit(): void {
    this.form=this.formBuilder.group({
      txtEmail:['',Validators.compose([Validators.required,Validators.email])],
      txtPassword:['',Validators.required]
    })
  }

  Login(){
    debugger
    var model=new SignInModel();
    model.Email=this.form.value["txtEmail"]
    model.Password=this.form.value["txtPassword"]

    this.accountService.Login(model).subscribe({
      next:data=>{
        debugger
        localStorage.setItem("token",data.token)
        this.router.navigate(['/CountryList'])

        console.log (data)
      },
      error:err=>{
        console.log("error")
      }
    })
  }
}
