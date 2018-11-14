import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/withLatestFrom';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Store } from '@ngrx/store';

import * as TeamActions from './team.action';
import { Team } from '../../shared/model/team.model';
import * as fromTeam from './team.reducers';

//@Injectable()
export class teamEffects {
  //@Effect()
  teamFetch = this.actions$
    .ofType(TeamActions.FETCH_TEAMS)
    .switchMap((action: TeamActions.FetchTeams) => {
      return this.httpClient.get<Team[]>('https://ng-recipe-book-3adbb.firebaseio.com/recipes.json', {
        observe: 'body',
        responseType: 'json'
      })
    });
    /*
    .map(
      (teams) => {
        console.log(teams);
        for (let team of teams) {
          if (!team['player']) {
            team['players'] = [];
          }
        }
        return {
          type: TeamActions.SET_TEAMS,
          payload: teams
        };
      }
    );
*/
  @Effect({dispatch: false})
  recipeStore = this.actions$
    .ofType(TeamActions.STORE_TEAMS)
    .withLatestFrom(this.store.select('teams'))
    .switchMap(([action, state]) => {
      const req = new HttpRequest('PUT', 'https://ng-recipe-book-3adbb.firebaseio.com/recipes.json', state.teams, {reportProgress: true});
      return this.httpClient.request(req);
    });

  constructor(private actions$: Actions,
              private httpClient: HttpClient,
              private store: Store<fromTeam.FeatureState>) {}
}
