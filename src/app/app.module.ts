import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnboardingModule } from './auth/onboarding/onboarding.module';
import { HireModule } from './hr/hire/hire.module';
import { InfoComponent } from './pages/info/info.component';
import { VisaComponent } from './pages/visa/visa.component';
import { HouseComponent } from './pages/house/house.component';
import { NavigationComponent } from './pages/navigation/navigation.component';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { HRPersonalProfileComponent } from './HRpages/hr-personal-profile/hr-personal-profile.component';
import { HRVisaManagementComponent } from './HRpages/hr-visa-management/hr-visa-management.component';
import { HRHireComponent } from './HRpages/hr-hire/hr-hire.component';
import { HRHouseManagementComponent } from './HRpages/hr-house-management/hr-house-management.component';
import { HRLayoutComponent } from './HRpages/hr-layout/hr-layout.component';
import { HRNavigationComponent } from './HRpages/hr-navigation/hr-navigation.component';
import { LoginModule } from './auth/login/login.module';
import { RegisterModule } from './auth/register/register.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HrHomeModule } from './hr/home/home.module';
import { EmployeeHomeModule } from './employee/home/home.module';
import { EmployeeProfileComponent } from './employee/employee-profile/employee-profile.component';
import { EmployeePersonalInfoModalComponent } from './employee/employee-profile/modal-container/employee-personal-info-modal/employee-personal-info-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeContactInfoModalComponent } from './employee/employee-profile/modal-container/employee-contact-info-modal/employee-contact-info-modal.component';
import { EmployeeAddressInfoModalComponent } from './employee/employee-profile/modal-container/employee-address-info-modal/employee-address-info-modal.component';
import { EmployeeEmergencyContactInfoModalComponent } from './employee/employee-profile/modal-container/employee-emergency-contact-info-modal/employee-emergency-contact-info-modal.component';
import { EmployeeDocumentInfoModalComponent } from './employee/employee-profile/modal-container/employee-document-info-modal/employee-document-info-modal.component';
import { EmployeeEmploymentInfoModalComponent } from './employee/employee-profile/modal-container/employee-employment-info-modal/employee-employment-info-modal.component';


const routes: Routes = [
  {
    path: "info",
    component: InfoComponent
  },
  {
    path: "visa",
    component: VisaComponent
  },
  {
    path: "house",
    component: HouseComponent
  },
  {
    path: "hrhire",
    component: HRHireComponent
  },
  {
    path: "hrhouse",
    component: HRHouseManagementComponent
  },
  {
    path: "hrprofile",
    component: HRPersonalProfileComponent
  },
  {
    path: "hrvisa",
    component: HRVisaManagementComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    VisaComponent,
    HouseComponent,
    NavigationComponent,
    LayoutComponent,
    HRPersonalProfileComponent,
    HRVisaManagementComponent,
    HRHireComponent,
    HRHouseManagementComponent,
    HRLayoutComponent,
    HRNavigationComponent,
    EmployeeProfileComponent,
    EmployeePersonalInfoModalComponent,
    EmployeeContactInfoModalComponent,
    EmployeeAddressInfoModalComponent,
    EmployeeEmergencyContactInfoModalComponent,
    EmployeeDocumentInfoModalComponent,
    EmployeeEmploymentInfoModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    OnboardingModule,
    HireModule,
    LoginModule,
    RegisterModule,
    HrHomeModule,
    EmployeeHomeModule,
    RouterModule.forRoot(routes, { useHash: false }),
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
