import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { loginUser } from '../formPage/employee-form/employee-form.component';

@Injectable({
  providedIn: 'root'
})
export class ApiConnectionService {
urls="http://localhost:7000/user";
  constructor(private http:HttpClient) { }
  getData(){
   return this.http.get(this.urls);
  }
  saveData(userData:loginUser){
    return this.http.post("http://localhost:7000/signup",userData)
  }
  deleteUser(userName:string){
    return this.http.delete(`${this.urls}/${userName}`)
  }
  update_form(userName:string,userData:loginUser){
    return this.http.put(`${this.urls}/${userName}`,userData);
  }

  getByUser(userName:any){
   return this.http.get(`${this.urls}/${userName}`);
  }
}
