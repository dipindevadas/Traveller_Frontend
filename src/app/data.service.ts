import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Action } from 'rxjs/internal/scheduler/Action';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getpackagedetail(id: any) {
    throw new Error('Method not implemented.');
  }
  httpclient: any;


  currentUser=''
  currentEmail=''

  navigateByUrl(arg0: string) {
    throw new Error('Method not implemented.');
  }
  search=new BehaviorSubject("")
 
  constructor(private http:HttpClient ) { }






  savedetails(){
    if(this.userDetails){
      localStorage.setItem("database",JSON.stringify(this.userDetails))
    }
    if(this.currentUser){
      localStorage.setItem("currentUser",JSON.stringify(this.currentUser))
    }
    if(this.currentEmail){
      localStorage.setItem("currentEmail",JSON.stringify(this.currentEmail))
    }
  }

getdetails(){
  if(localStorage.getItem('database')){
    this.userDetails=JSON.parse(localStorage.getItem('database') || '')
  }
  if(localStorage.getItem('currentuser')){
    this.currentUser=JSON.parse(localStorage.getItem('currentUser') || '')
  }
  
    if(localStorage.getItem('currentEmail')){
      this.currentEmail=JSON.parse(localStorage.getItem('currentEmail') || '')
    }
}






  userDetails:any={
    amal:{username:"Amal",password:1000,email:"amal@gmail.com"},
    anu:{username:"Anu",password:1001,email:"anu@gmail.com"},
    arun:{username:"Arun",password:1002,email:"arun@gmail.com"},
    sarah:{username:"Sarah",password:1003,email:"sarah@gmail.com"}
    
  }

  register(email:any,uname:any,pwd:any){
   
    const data={
      uname,pwd,email
    }
    return this.http.post('http://localhost:3003/register',data)
   
}


login(uname:any,pwd:any){
  const data={
    uname,pwd
  }
  return this.http.post('http://localhost:3003/login',data)
  
//   var userDetails=this.userDetails
  
//  if(uname in userDetails){
//   if(pwd == userDetails[uname]["password"]){

}




//http request view all products
tourPackages(){
  return this.http.get("http://localhost:3000/packages")
}




// //to get sigle product data


// getPackages(){
//   return this.http.get("http://localhost:3003/tour-packages")
// }

 viewpackage(id:any){
   return this.httpclient.get("http://localhost:3000/packages/"+id)
 }




  
  

}








