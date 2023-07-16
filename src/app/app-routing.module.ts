import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryListComponent } from './country-list/country-list.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { LoginComponent } from './login/login.component';
import { NewCountryComponent } from './new-country/new-country.component';
import { NewPatientComponent } from './new-patient/new-patient.component';
import { PatientListComponent } from './patient-list/patient-list.component';

const routes: Routes = [
  {path:'',component:NewCountryComponent},
  {path:'CountryList',component:CountryListComponent},
  {path:'NewPatient',component:NewPatientComponent},
  {path:'PatientList',component:PatientListComponent},
  {path:'CreateAccount',component:CreateAccountComponent},
  {path:'login',component:LoginComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

