import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as fromTeam from '../store/team.reducers'
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.css']
})
export class TeamsListComponent implements OnInit {
  teamState: Observable<fromTeam.State>;
  constructor(private router: Router,
              private route: ActivatedRoute,
              private store: Store<fromTeam.FeatureState>) { }

  ngOnInit() {
    this.teamState = this.store.select('teams');
  }
  onNewTeam(){
    this.router.navigate(['new'], { relativeTo : this.route });
  }

}
