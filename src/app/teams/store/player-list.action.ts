import { Action } from '@ngrx/store';

import { Player } from '../../shared/model/player.model';

export const SET_PLAYERS = 'SET_PLAYERS';
export const ADD_PLAYER = 'ADD_PLAYER';
export const UPDATE_PLAYER = 'UPDATE_PLAYER';
export const DELETE_PLAYER = 'DELETE_PLAYER';
export const START_EDIT = 'START_EDIT';
export const STOP_EDIT = 'STOP_EDIT';

export class SetPlayer implements Action {
  readonly type = SET_PLAYERS;
  constructor(public payload: {players:Player[], teamId:string}) {}
}

export class AddPlayers implements Action {
  readonly type = ADD_PLAYER;
  constructor(public payload: Player) {}
}

export class UpdatePlayer implements Action {
  readonly type = UPDATE_PLAYER;
  constructor(public payload: {player: Player}) {}
}

export class DeletePlayer implements Action {
  readonly type = DELETE_PLAYER;
}

export class StartEdit implements Action {
  readonly type = START_EDIT;
  constructor(public payload: number) {}
}

export class StopEdit implements Action {
  readonly type = STOP_EDIT;
}

export type PlayerListActions =
  SetPlayer |
  AddPlayers |
  UpdatePlayer |
  DeletePlayer |
  StartEdit |
  StopEdit;
