import { Action } from '@ngrx/store';

import { Team } from '../../shared/model/team.model';

export const SET_TEAMS = 'SET_TEAMS';
export const ADD_TEAM = 'ADD_TEAM';
export const UPDATE_TEAM = 'UPDATE_TEAM';
export const DELETE_TEAM = 'DELETE_TEAM';
export const STORE_TEAMS = 'STORE_TEAMS';
export const FETCH_TEAMS = 'FETCH_TEAMS';

export class SetTeams implements Action {
  readonly type = SET_TEAMS;
  constructor(public payload: Team[]) {}
}

export class AddTeam implements Action {
  readonly type = ADD_TEAM;
  constructor(public payload: Team) {}
}

export class UpdateTeam implements Action {
  readonly type = UPDATE_TEAM;
  constructor(public payload: {index: number, updatedTeam: Team}) {}
}

export class DeleteTeam implements Action {
  readonly type = DELETE_TEAM;

  constructor(public payload: number) {}
}

export class StoreTeams implements Action {
  readonly type = STORE_TEAMS;
}

export class FetchTeams implements Action {
  readonly type = FETCH_TEAMS;
}

export type TeamActions = SetTeams |
  AddTeam |
  UpdateTeam |
  DeleteTeam |
  StoreTeams |
  FetchTeams;