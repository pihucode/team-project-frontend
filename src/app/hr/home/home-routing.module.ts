import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HrHomeComponent } from './home.component';

const routes: Routes = [
  { path: 'hr/home', component: HrHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HrHomeRoutingModule { }
