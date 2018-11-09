import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
 
@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.css']
})
export class PersonEditComponent implements OnInit {
  
    personForm : FormGroup;
    types = ['Parent','Player','Coach'];
    constructor() { }
  
    ngOnInit() {
      this.personForm = new FormGroup({
        'name' : new FormControl(null,[Validators.required]),
        'lastName' : new FormControl(null,[Validators.required]),
        'dob' : new FormControl(null,[Validators.required]),
        'email' : new FormControl(null,[Validators.required,Validators.email]),
        'type' : new FormControl(null,[Validators.required]),
        'picture' : new FormControl(null,[Validators.required]),
        'status' : new FormControl(null,[Validators.required])
        //'parents' : new FormArray([])
      })
    }
    onSubmit(){
      console.log(this.personForm);
    }
  
  }
  