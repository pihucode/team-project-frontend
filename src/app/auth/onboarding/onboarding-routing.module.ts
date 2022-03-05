import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationFormComponent } from './application-form/application-form.component';
import { ApplicationStatusComponent } from './application-status/application-status.component';

const onboardingRoutes: Routes = [
    { path: 'onboarding', component: ApplicationFormComponent },
    { path: 'application-status', component: ApplicationStatusComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(onboardingRoutes)],
    exports: [RouterModule]
})
export class OnboardingRoutingModule { }
