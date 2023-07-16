import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {  CountryDTO } from '../model/Country';
import { CountryService } from '../services/countryService';

@Component({
  selector: 'app-new-country',
  templateUrl: './new-country.component.html',
  styleUrls: ['./new-country.component.css']
})
export class NewCountryComponent implements OnInit {

  Id!:any
  IsUpdate:boolean=false;
  form!:FormGroup;
  constructor(private formBuilder:FormBuilder,
    private countryService:CountryService,
    private activatedRoute:ActivatedRoute
    ){}
  ngOnInit(): void {
    debugger
    if(this.activatedRoute.snapshot.queryParams["id"] !=undefined){
      this.Id=this.activatedRoute.snapshot.queryParams["id"]
      this.countryService.Load(this.activatedRoute.snapshot.queryParams["id"]).subscribe({
        next:data=>{
          debugger
          this.form.controls["txtName"].setValue(data.name)

          console.log(data)
          this.IsUpdate=true
        },
        error:err=>{
          console.log("error")
        }
      })

    }
    

    this.form=this.formBuilder.group({
      txtName:['',Validators.required]
    })
  }

  Update(){
    debugger
    var country=new CountryDTO();
    country.name=this.form.value["txtName"]
    country.id=this.Id
    this.countryService.Update(country).subscribe({
      next:data=>{
        console.log("success")
      },
      error:err=>{
        console.log("error")
      }
    })

  }
  save(){
    debugger
    var country=new CountryDTO();
    country.name=this.form.value["txtName"]
    this.countryService.create(country).subscribe({
      next:data=>{
        console.log("success")
      },
      error:err=>{
        console.log(err)
      }
    })

  }

}
