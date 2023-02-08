import { Component,OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

data="Enter your name"
uname=''
pwd=""




  userDetails:any={
    amal:{username:"Amal",password:1000,email:"amal@gmail.com"},
    anu:{username:"Anu",password:1001,email:"anu@gmail.com"},
    arun:{username:"Arun",password:1002,email:"arun@gmail.com"},
    sarah:{username:"Sarah",password:1003,email:"sarah@gmail.com"}
  }
  
  id: any;



 

  constructor(private router:Router,private ds:DataService,private fb:FormBuilder) { }

loginForm=this.fb.group({ uname:['',[Validators.required,Validators.pattern('[A-Z,a-z]+')]],pwd:['',[Validators.required,Validators.pattern('[0-9]+')]]})
  ngOnInit(): void {
    
  }



  login(){
    var uname=this.loginForm.value.uname
    
    var pwd=this.loginForm.value.pwd
    var userDetails=this.userDetails

    if(this.loginForm.valid){
      this.ds.login(uname,pwd).subscribe((result:any)=>{
        localStorage.setItem('currentUser',JSON.stringify(result.currentUser));
       localStorage.setItem('currentEmail',JSON.stringify(result.currentEmail));
        localStorage.setItem('token',JSON.stringify(result.token));
        alert(result.message)
        this.router.navigateByUrl('')
      },
      result=>{
        alert(result.error.message)
      })
  
    

    

   }
   else{
    alert('invalid form')
   }
    
  }
}
  
  // unameChange(event:any){
    
  //   this.uname=event.target.value;
  //   console.log(this.uname);
    

  // }

  // pswChange(event:any){
  
  //   this.pwd=event.target.value;
  //   console.log(this.pwd
  //     );

  // }

  // login(a:any,b:any){

  //   console.log(a.value);
  //   console.log(b.value);
    
  //   this.uname=a.value
  //   this.pwd=b.value

    
  //   var uname=this.uname 
  
  //   var pwd=this.pwd
  //   var userDetails=this.userDetails
    
  //  if(uname in userDetails){
  //   if(pwd == userDetails[uname]["password"]){
  //     alert('login successfull')

  //   }else
  //   {
  //     alert('invalid password')
  //   }

  //  }else{
  //   alert('invalid username')
  //  }
    
  // }
  
  // unameChange(event:any){
    
  //   this.uname=event.target.value;
  //   console.log(this.uname);
    

  // }

  // pswChange(event:any){
  
  //   this.pwd=event.target.value;
  //   console.log(this.pwd
  //     );

  // }



