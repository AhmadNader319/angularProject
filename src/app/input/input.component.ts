import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  // Name property
  name?:String = "Ahmad Nader";

  // Login status property
  isLogIn : boolean = false;

  // Logout status property
  isLogOut : boolean = true;

  // Name array
  names = ["Ahmad","Nader"];
  
  // Number array
  nums = [1,2,3,1,2];

  
}

