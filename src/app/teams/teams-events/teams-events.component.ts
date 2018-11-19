import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as fromTeam from '../store/team.reducers'
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-teams-events',
  templateUrl: './teams-events.component.html',
  styleUrls: ['./teams-events.component.css']
})
export class TeamsEventsComponent implements OnInit {
  eventForm : FormGroup;
  id:number;
  teamsState: Observable<fromTeam.State>;
  types = ['Recurrent','One Time'];
  constructor(private route: ActivatedRoute,
    private router:Router,
    private store: Store<fromTeam.FeatureState>) {
  }

  ngOnInit() {
    console.log('TeamsEventsComponent '+'inciando');
      this.route.params
      .subscribe(
      (params:Params)=>{
        this.id=+params['id'];
        this.teamsState = this.store.select('teams');
      });
    }
  onSubmit(){
    console.log(this.eventForm);
  }

}
