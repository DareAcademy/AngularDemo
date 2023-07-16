import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountryDTO } from '../model/Country';
import { CountryService } from '../services/countryService';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {
  
  liCountry!:CountryDTO[]

  constructor(private countryService:CountryService, private router:Router){}
  
  ngOnInit(): void {
    debugger
    this.fillCountry();
  }

  onDelete(id:number){
    debugger
   this.countryService.Delete(id).subscribe({
    next:data=>{
      debugger
      this.fillCountry();
    },
    error:err=>{
      console.log("error")
    }
   }) 
  }

  onEdit(id:number){
    debugger
    this.router.navigate(['/'],{queryParams:{id:id}})
  }

  fillCountry(){
    this.countryService.LoadAll().subscribe({
      next:data=>{
        debugger
        this.liCountry=data
      },
      error:err=>{
        console.log(err)
      }
    })
  }
}
