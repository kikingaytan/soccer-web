  import { Component, OnInit } from '@angular/core';
  import { FormGroup, FormControl, Validators } from '@angular/forms';
  
  @Component({
    selector: 'app-teams-events-edit',
    templateUrl: './teams-events-edit.component.html',
    styleUrls: ['./teams-events-edit.component.css']
  })
  export class TeamsEventsEditComponent  implements OnInit {
    eventForm : FormGroup;
    types = ['Recurrent','One Time'];
    constructor() { }
  
    ngOnInit() {
      this.eventForm = new FormGroup({
        'type' : new FormControl(null,[Validators.required]),
        'date' : new FormControl(null,[Validators.required]),
        'arriveTime' : new FormControl(null,[Validators.required]),
        'startTime' : new FormControl(null,[Validators.required]),
        'endTime' : new FormControl(null,[Validators.required]),
        'status' : new FormControl(null,[Validators.required]),
        'vsTeam' : new FormControl(null,[Validators.required]),
        'address' : new FormControl(null,[Validators.required]),
        'field' : new FormControl(null,[Validators.required])
        //'parents' : new FormArray([])
      });
    }
    onSubmit(){
      console.log(this.eventForm);
    }
  
  }
  