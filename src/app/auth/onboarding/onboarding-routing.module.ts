import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnBoardAuthGuardGuard } from 'src/app/guards/on-board-auth-guard.guard';
import { ApplicationFormComponent } from './application-form/application-form.component';
import { ApplicationStatusComponent } from './application-status/application-status.component';

const onboardingRoutes: Routes = [
    { path: 'onboarding', component: ApplicationFormComponent,
    canActivate:[OnBoardAuthGuardGuard] },
    { path: 'application-status', component: ApplicationStatusComponent,
    canActivate:[OnBoardAuthGuardGuard] }
];

@NgModule({
    imports: [RouterModule.forRoot(onboardingRoutes)],
    exports: [RouterModule]
})
export class OnboardingRoutingModule { }
