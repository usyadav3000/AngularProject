import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { EmployeeListComponent } from './list/employee-list/employee-list.component';
import { EmployeeFormComponent } from './formPage/employee-form/employee-form.component';
import {HttpClientModule} from '@angular/common/http';
/* import { SubmitFormComponent } from './form/submit-form/submit-form.component'
 */
@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
