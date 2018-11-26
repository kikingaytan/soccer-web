
import * as fromApp from './app.reducers';

import { Coach } from '../../shared/model/coach.model';
import { Team } from '../../shared/model/team.model';
import * as TeamActions from './team.action';
import { Event } from 'src/app/shared/model/event.model';
import { Period } from 'src/app/shared/model/period.model';

export interface FeatureState extends fromApp.AppState {
  teams: State;
}

export interface State {
  selectedTeamIndex:number;
  teams: Team[];
}

const initialState: State = {
  selectedTeamIndex: -1,
  teams:[
    new Team(
      '1',
      'NWA Manchester Soccer Team 2006',
      2006,
      'Premium',
      [
        new Coach('1','Head Couch','Resume'),
        new Coach('2','SubHead Couch','Resume')
      ],
      [],
      []
      ),
      new Team(
        '2',
        'NWA Manchester Soccer Team 2008 fernandito',
        2008,
        'Premium',
        [
          new Coach('1','Head Couch','Resume'),
          new Coach('2','SubHead Couch','Resume')
        ],
        [],
        [
        new Event('game', '12/31/2018','5:00', 
        '5:30','6:30', 
        'Active', 'EquipoVisitante','5','1',
         new Period('One Time',null,null,null)),
         new Event('trainning', '12/31/2018','5:00', 
         '5:30','6:30', 
         'Active', 'EquipoVisitante','5','1',
          new Period('recurrent','08/01/2018','12/15/2018',['Monday',
          'Wednesday']))
        ]
      )
  ]
};
export function teamReducer(state = initialState, action: TeamActions.TeamActions) {
  switch (action.type) {
    case (TeamActions.SET_TEAMS):
      return {
        ...state,
        teams: [...action.payload]
      };
    case (TeamActions.ADD_TEAM):
      return {
        ...state,
        teams: [...state.teams, action.payload]
      };
    case (TeamActions.UPDATE_TEAM):
      const team = state.teams[action.payload.index];
      const updatedTeam = {
        ...team,
        ...action.payload.updatedTeam
      };
      const teams = [...state.teams];
      teams[action.payload.index] = updatedTeam;
      return {
        ...state,
        teams: teams
      };
    case (TeamActions.DELETE_TEAM):
      const oldTeams = [...state.teams];
      oldTeams.splice(action.payload, 1);
      return {
        ...state,
        teams: oldTeams
      };
    default:
      return state;
  }
}
