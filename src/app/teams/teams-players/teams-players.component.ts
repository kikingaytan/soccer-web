import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-teams-players',
  templateUrl: './teams-players.component.html',
  styleUrls: ['./teams-players.component.css']
})
export class TeamsPlayersComponent implements OnInit {

  playerForm : FormGroup;
  types = ['Parent','Player','Coach'];
  constructor() { }

  ngOnInit() {
    this.playerForm = new FormGroup({
      'position' : new FormControl(null,[Validators.required]),
      'jerseyNumber' : new FormControl(null,[Validators.required])
    })
  }
  onSubmit(){
    console.log(this.playerForm);
  }

}
