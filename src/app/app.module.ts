import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnboardingModule } from './auth/onboarding/onboarding.module';
import { HireModule } from './hr/hire/hire.module';
import { InfoComponent } from './pages/info/info.component';
import { HouseComponent } from './pages/house/house.component';
import { NavigationComponent } from './pages/navigation/navigation.component';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { HRPersonalProfileComponent } from './HRpages/hr-personal-profile/hr-personal-profile.component';
import { HRHireComponent } from './HRpages/hr-hire/hr-hire.component';
import { HRHouseManagementComponent } from './HRpages/hr-house-management/hr-house-management.component';
import { HRLayoutComponent } from './HRpages/hr-layout/hr-layout.component';
import { HRNavigationComponent } from './HRpages/hr-navigation/hr-navigation.component';
import { LoginModule } from './auth/login/login.module';
import { RegisterModule } from './auth/register/register.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeHomeModule } from './employee/home/home.module';
import { EmployeeProfileModule } from './employee/employee-profile/employee-profile.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VisaModule } from './hr/visa/visa.module';
import { HrHomeModule } from './hr/home/home.module';
import { EmployeeListModule } from './hr/employee-list/employee-list.module';
import { EmployeeVisaModule } from './employee/employee-visa/employee-visa.module';
import { DatePipe } from '@angular/common';
import { HrHousingModule } from './hr/hr-housing/hr-housing.module';

const routes: Routes = []

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    HouseComponent,
    NavigationComponent,
    LayoutComponent,
    HRPersonalProfileComponent,
    HRHireComponent,
    HRHouseManagementComponent,
    HRLayoutComponent,
    HRNavigationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    OnboardingModule,
    HireModule,
    LoginModule,
    RegisterModule,
    EmployeeHomeModule,
    EmployeeVisaModule,
    HrHomeModule,
    VisaModule,
    EmployeeListModule,
    RouterModule.forRoot(routes, { useHash: false }),
    NgbModule,
    BrowserAnimationsModule,
    EmployeeProfileModule,
    HrHousingModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
