import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as fromTeam from '../store/team.reducers'
import * as TeamActions from '../store/team.action'
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-teams-detail',
  templateUrl: './teams-detail.component.html',
  styleUrls: ['./teams-detail.component.css']
})
export class TeamsDetailComponent implements OnInit {
  teamsState: Observable<fromTeam.State>;
  id: number;
  constructor(private route: ActivatedRoute,
              private router:Router,
              private store: Store<fromTeam.FeatureState>) {
  }

    ngOnInit(){
      this.route.params
        .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.teamsState = this.store.select('teams');
        }
      );
    }

  onEditTeam() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }
  onShowEvents() {
    this.router.navigate(['events'], {relativeTo: this.route} );
  }
  onManageEventsTeam() {
    this.router.navigate(['events-list'], {relativeTo: this.route});
  }
  onDeleteTeam() {
    this.store.dispatch(new TeamActions.DeleteTeam(this.id));
    this.router.navigate(['teams']);
  }

}
