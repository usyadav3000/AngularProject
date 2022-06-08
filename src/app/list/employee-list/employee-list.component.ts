import { Component, OnInit } from '@angular/core';
import { ObjectUnsubscribedError } from 'rxjs';
import {ApiConnectionService} from '../../services/api-connection.service';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  resData1!: loginUser[];

  constructor(private apiSer:ApiConnectionService,private router:Router,private activerdRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.apiSer.getData().subscribe((res:any)=>{
      this.resData1=res.data;
      console.log("res data",this.resData1);
    })
  }
  deleteUser(id:any,userName:any){
    this.resData1.splice(id,1);
   this.apiSer.deleteUser(userName).subscribe((res)=>{
    window.location.reload();
    console.log('result',res);
    

   })
   console.log("id is ",id +" username is ",userName);
  }
  update_form(id:any,userName:any){
    this.router.navigate(['formPage',userName,id,'edit']);

  }

}
export class loginUser{
  userName!: string;
  password!: string;
  email!: string;
  date!: string;
}
