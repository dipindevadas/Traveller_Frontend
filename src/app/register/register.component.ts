import { Component,OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 

   email=""
   uname=""
   pwd=""
  
  

  constructor(private ds:DataService,private router:Router,private fb:FormBuilder) { }

  registerForm=this.fb.group({
  email:['', [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
  uname:['',[Validators.required,Validators.pattern('[a-zA-Z]+')]],
  pwd:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]+')]]})
  ngOnInit(): void {
    
  }

  register(){
    
    var email=this.registerForm.value.email
    var uname=this.registerForm.value.uname
    var pwd=this.registerForm.value.pwd

    if(this.registerForm.valid){  
      this.ds.register(email,uname,pwd).subscribe(
        (result:any)=>{
        alert(result.message)
        this.router.navigateByUrl('login')
      },
      result=>{
        alert(result.error.message)
        this.router.navigateByUrl('login')
      }
        
      )
      }

     
    
    else
    {
      alert("invalid form")
    } 
  }  
}