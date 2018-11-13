import { Team } from '../shared/model/team.model';
import * as fromApp from './app.reducers';
import  * as TeamActions  from './team.action';
import { Coach } from '../shared/model/Coach.model';

export interface FeatureState extends fromApp.AppState {
  teams: State
}

export interface State {
  teams: Team[];
}

const initialState: State = {
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
