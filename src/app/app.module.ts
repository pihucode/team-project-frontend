import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnboardingModule } from './auth/onboarding/onboarding.module';
import { HireModule } from './hr/hire/hire.module';
import { HomeComponent } from './pages/home/home.component';
import { InfoComponent } from './pages/info/info.component';
import { VisaComponent } from './pages/visa/visa.component';
import { HouseComponent } from './pages/house/house.component';
import { NavigationComponent } from './pages/navigation/navigation.component';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { HRHomeComponent } from './HRpages/hr-home/hr-home.component';
import { HRPersonalProfileComponent } from './HRpages/hr-personal-profile/hr-personal-profile.component';
import { HRVisaManagementComponent } from './HRpages/hr-visa-management/hr-visa-management.component';
import { HRHireComponent } from './HRpages/hr-hire/hr-hire.component';
import { HRHouseManagementComponent } from './HRpages/hr-house-management/hr-house-management.component';
import { HRLayoutComponent } from './HRpages/hr-layout/hr-layout.component';
import { HRNavigationComponent } from './HRpages/hr-navigation/hr-navigation.component';


const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
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
    path: "hrhome",
    component: HRHomeComponent
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
    HomeComponent,
    InfoComponent,
    VisaComponent,
    HouseComponent,
    NavigationComponent,
    LayoutComponent,
    HRHomeComponent,
    HRPersonalProfileComponent,
    HRVisaManagementComponent,
    HRHireComponent,
    HRHouseManagementComponent,
    HRLayoutComponent,
    HRNavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OnboardingModule,
    HireModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
