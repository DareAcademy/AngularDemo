import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignupModel } from '../model/signupModel';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  form!:FormGroup;
  constructor(private formBuilder:FormBuilder,
    private accountService:AccountService){}
  ngOnInit(): void {
    this.form=this.formBuilder.group({
      txtName:['',Validators.required],
      txtEmail:['',Validators.compose([Validators.required,Validators.email])],
      txtPassword:['',Validators.required],
      txtPhone:['',Validators.required]
    })
  }
  onSignUp(){
    debugger
    var signUp=new SignupModel();
    signUp.name=this.form.value['txtName']
    signUp.email=this.form.value['txtEmail']
    signUp.password=this.form.value['txtPassword']
    signUp.phone=this.form.value['txtPhone']
    this.accountService.createAccount(signUp).subscribe({
      next:data=>{
        debugger
        console.log("Success")
      },
      error:err=>{
        console.log("error")
      }
    })
  }
}
