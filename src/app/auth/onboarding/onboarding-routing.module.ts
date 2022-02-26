import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationFormComponent } from './application-form/application-form.component';

const onboardingRoutes: Routes = [
    { path: 'onboarding', component: ApplicationFormComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(onboardingRoutes)],
    exports: [RouterModule]
})
export class OnboardingRoutingModule { }
