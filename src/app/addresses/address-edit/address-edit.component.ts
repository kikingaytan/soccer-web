import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-address-edit',
  templateUrl: './address-edit.component.html',
  styleUrls: ['./address-edit.component.css']
})
export class AddressEditComponent implements OnInit {
  addressForm : FormGroup;
  types = ['Parent','Player','Coach'];
  constructor() { }

  ngOnInit() {
    this.addressForm = new FormGroup({
      'locationName' : new FormControl(null,[Validators.required]),
      'address' : new FormControl(null,[Validators.required]),
      'address2' : new FormControl(null,[Validators.required]),
      'state' : new FormControl(null,[Validators.required]),
      'city' : new FormControl(null,[Validators.required]),
      'zip' : new FormControl(null,[Validators.required])
      //'parents' : new FormArray([])
    })
  }
  onSubmit(){
    console.log(this.addressForm);
  }

}
