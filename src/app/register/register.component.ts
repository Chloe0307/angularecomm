import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  
  reactiveForm : FormGroup | undefined; 

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      firstname : new FormControl(null),
      lastname : new FormControl(null),
      email : new FormControl(null),
      password : new FormControl(null),
      address : new FormControl(null),
      zipCode : new FormControl(null),
      city : new FormControl(null),
    });
  }
}
