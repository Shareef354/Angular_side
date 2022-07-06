import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './layouts/main-layout/login/login.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AcademicResultComponent } from './pages/academic-result/academic-result.component';
import { AnnoucementComponent } from './pages/annoucement/annoucement.component';
import { RegistrationFormComponent } from './pages/registration-form/registration-form.component';
import { StudentDetailsComponent } from './pages/student-details/student-details.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'registration-form',component:RegistrationFormComponent},
  {path:'login',component:LoginComponent},
  {
    path:'main-layout',
    component:MainLayoutComponent,
    children:[
      {
        path:'',
        component:StudentDetailsComponent
      },
      {
        path:'student-details',
        component:StudentDetailsComponent
      },
      {
        path:'Annoucement',
        component:AnnoucementComponent
      },
      {
        path:'Academic-result',
        component:AcademicResultComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
