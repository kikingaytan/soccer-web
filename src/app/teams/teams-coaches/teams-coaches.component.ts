import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-teams-coaches',
  templateUrl: './teams-coaches.component.html',
  styleUrls: ['./teams-coaches.component.css']
})
export class TeamsCoachesComponent implements OnInit {

  playerForm : FormGroup;
  types = ['Parent','Player','Coach'];
  constructor() { }

  ngOnInit() {
    this.playerForm = new FormGroup({
      'position' : new FormControl(null,[Validators.required])
    })
  }
  onSubmit(){
    console.log(this.playerForm);
  }

}
