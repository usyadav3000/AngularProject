import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployeeListComponent} from './list/employee-list/employee-list.component';
import {EmployeeFormComponent} from './formPage/employee-form/employee-form.component';
import {AppComponent} from './app.component'


const routes: Routes = [
  { path: '', redirectTo:'', pathMatch: 'full' },
  { path:'', component: AppComponent},
  { path:'list', component: EmployeeListComponent},
  { path:'formPage', component: EmployeeFormComponent},
  { path:'formPage/:userName/:id/:edit', component: EmployeeFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  //imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
