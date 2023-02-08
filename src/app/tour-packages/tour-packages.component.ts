

 import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ApiService } from './api.service';




@Component({
  selector: 'app-tour-packages',
  templateUrl: './tour-packages.component.html',
  styleUrls: ['./tour-packages.component.css']
})
export class TourPackagesComponent implements OnInit {

  allpackages:any=[];
 packagelist:any
 filterpackages:any
 searchterm:any

  constructor(private api:ApiService,private ds:DataService,private http:HttpClient) {
    
   }
  ngOnInit(): void {
  this.api.getPackages().subscribe(
    (data:any)=>{
      this.allpackages=data.packages
    }
  )





    this.ds.tourPackages().subscribe((data:any)=>{
      // console.log(data);
      this.packagelist=data
    })
    
    this.ds.search.subscribe((data:any)=>{
      this.searchterm=data
    })

    // this.ds.getPackages().subscribe(
    //   (data:any)=>{
    //     this.allpackages=data.Packages
    //   }
    // )
    
  }

  search(event:any){
    this.searchterm=event.target.value
    this.ds.search.next(this.searchterm)
  }
  filter(category:any){
    this.filterpackages= this.packagelist.filter((item:any)=>{
     if(item.categoryId==category || category==""){
       return item
     }
    })
  }

  // addtobooking(i:any){
  //   this.ds.addtobooking(i).subscribe(
  //     (result:any)=>{
  //       alert(result.message)
  //     },
  //     (result:any)=>{
  //       alert(result.error.message);
        
  //     }
  //   )
  // }


  
}
