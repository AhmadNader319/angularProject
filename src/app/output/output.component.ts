import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent {
   //// Property to bind name
  name?:String = "Ahmad Nader"
  // Student data array
  
  studentArr: any[] = [
   // Student objects
    { 

    "id": 1, 
    "name": "Hana",
    "movies":"Intersteller"
 }, 
 { 
    "id": 2,
    "name": "Ahmad" 
 }, 
 { 
    "id": 3, "name": "Nader"
 },
 { 
    "id": 4, 
    "name": "Abdel Moneim",
    "movies":"cry cry cry"
 } 
 ]; 
 // Method to track student id + name + movies if found
 tracking(index:number, studentArr:any): number { 
    return studentArr.id+studentArr.name+studentArr.movies; 
 }
 // Property to hold click message
 clickMessage = '';
// Method handler for click button
 onClickMe() {
   this.clickMessage = 'First message lesgoooo!';
 }

}



