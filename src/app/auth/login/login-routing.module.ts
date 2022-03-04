import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from 'src/app/guards/authguard.guard';
import { LoginComponent } from './login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
