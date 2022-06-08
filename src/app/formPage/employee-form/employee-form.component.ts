import { Component, OnInit } from '@angular/core';
import {ApiConnectionService} from '../../services/api-connection.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  id:any
  user :any;
  data1:any=[];
  msg:boolean=false;
   resData1!: loginUser[];
  usr:loginUser=new loginUser(); 
  constructor(private apiSer:ApiConnectionService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit():void {
    if(this.route.snapshot.params['edit']=="edit"){
     this.user= this.route.snapshot.params['userName'];
      this.id=this.route.snapshot.params['id'];

      this.apiSer.getData().subscribe((res:any)=>{
        this.resData1=res.data;
        //console.log("1",this.resData1)
        //console.log(res.data.userName)
        
        this.usr.userName=res.data[this.id].userName;
        this.usr.password=res.data[this.id].password;
        this.usr.email=res.data[this.id].email;

        //console.log("param  user",this.route.snapshot.params['userName']);
      })
    }
    //console.log("param  user",this.route.snapshot.params['userName']);

 
 /*   if(this.route.snapshot.params['edit']=="edit"){
    this.id=this.route.snapshot.params['id'];
    this.apiSer.getDataById(this.id).subscribe((data:any)=>{

    })
   } */
  
  }
  savaData(f:any){
    if(this.route.snapshot.params['edit']!='edit'){
      this.apiSer.saveData(this.usr).subscribe((res:any)=>{
        this.resData1=res.data;
        console.log(this.resData1);
        this.router.navigate(['/formPage']);
        this.msg=true;
      })
      f.reset();
      }
      else{
      this.apiSer.update_form(this.user,this.usr).subscribe((result)=>{
        console.log(result);
        this.router.navigate(['/list'])
      })
  
      }
    }
  
   onLoadPage(){
    this.router.navigate(['/list'])
  }
}

export class loginUser{
  userName!: string;
  password!: string;
  email!: string;
  date!: string;
}
