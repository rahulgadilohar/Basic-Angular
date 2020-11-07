import { ReturnStatement } from '@angular/compiler';
import { Component } from '@angular/core';
import { UserService } from "./user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Api';
  // getcons() {  console.log("Hi you are in console now"); };
  
  // array=[]
  

  constructor( private user:UserService){
    this.user.getdata().subscribe(data=>
      console.warn(data),
        
      // this.array=data 
      )}

}
