import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {

 packid:any
 packagedata:any

 data="";
 type=''
 id:any='';
 url='';
 packages: any;
 package: any;
 
  constructor(private route:ActivatedRoute,private ds:DataService,private fb:FormBuilder,private router:Router) {}

    bookingForm=this.fb.group({
      email:['', [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
      uname:['',[Validators.required,Validators.pattern('[a-zA-Z]+')]],
      pwd:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]+')]]})
    
   
  ngOnInit(): void {
    
  this.route.params.subscribe((data:any)=>{
    this.packid=data["id"]
    
    
  })
    // this.id=this.route.snapshot.params['id'];
    // if(this.id==='id'){
    //   this.url = 'http://localhost:3000/package-details'

    // }
    // this.getpackagedetail(this.id);
    this.ds.viewpackage(this.packid).subscribe((item:any)=>{
      // console.log(item);
      this.packagedata=item
    })
  
  }

  booking(){
    var email=this.bookingForm.value.email
    var uname=this.bookingForm.value.uname
    var pwd=this.bookingForm.value.pwd

    if(this.bookingForm.valid){  
      this.ds.register(email,uname,pwd).subscribe(
        (result:any)=>{
        alert(result.message)
        this.router.navigateByUrl('payment')
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

  //  getpackagedetail(id:any){
  //   const result = this.ds.getpackagedetail(id)
  //   .subscribe((result:any)=>{
  //     this.packages=result.movies;
  //   },
  //   (result:any)=>{
  //     alert(result.error.message);
  //   //   )
  //   // }

  //   })

  // }




  //   this.ds.viewpackage(this.packid).subscribe((item:any)=>{
  //      console.log(item);
  //   //  this.packagedata=item
  //   })
  //  }



}
