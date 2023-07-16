import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {  CountryDTO } from "../model/Country";

@Injectable()
export class CountryService{
constructor(private http:HttpClient){}

create(country:CountryDTO):Observable<any>{
    debugger
return this.http.post("http://localhost/AngularClinicDemo/api/Country",country)
}

Update(country:CountryDTO):Observable<any>{
    debugger
return this.http.put("http://localhost/AngularClinicDemo/api/Country",country)
}

LoadAll():Observable<any>{
    debugger
    return this.http.get("http://localhost/AngularClinicDemo/api/Country/LoadAll")
}

Load(id:number):Observable<any>{
    debugger
    return this.http.get("http://localhost/AngularClinicDemo/api/Country/Load?Id="+id)
}

Delete(id:number):Observable<any>{
    debugger
    return this.http.delete("http://localhost/AngularClinicDemo/api/Country?Id="+id)
}

}