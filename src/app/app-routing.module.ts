import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // By Chad, for mostly testing atm
  {path: 'login', 
  loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule),}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
