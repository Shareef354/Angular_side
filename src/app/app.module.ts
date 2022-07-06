import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { StudentDetailsComponent } from './pages/student-details/student-details.component';
import { AcademicResultComponent } from './pages/academic-result/academic-result.component';
import { AnnoucementComponent } from './pages/annoucement/annoucement.component';
import { RegistrationFormComponent } from './pages/registration-form/registration-form.component';
import { LoginComponent } from './layouts/main-layout/login/login.component';
import {MatInputModule} from '@angular/material/input'; 
import {MatCheckboxModule} from '@angular/material/checkbox'; 


@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    StudentDetailsComponent,
    AcademicResultComponent,
    AnnoucementComponent,
    RegistrationFormComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatCheckboxModule,
 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
