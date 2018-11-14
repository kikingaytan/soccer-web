//import * as ShoppingListActions from './shopping-list.actions';

import * as PlayerListActions  from './player-list.action';
import { Player } from '../../shared/model/player.model';
export interface State {
  players: Player[];
  editedPlayer: Player;
  editedPlayerIndex: number;
  teamId: string; 
}

const initialState: State = {
  players: [
    new Player('1','Foward' ,5),
    new Player('2','Midlefield', 10)
  ],
  editedPlayer: null,
  editedPlayerIndex: -1,
  teamId: '1'
};

export function playerListReducer(state = initialState, action: PlayerListActions.PlayerListActions) {
  switch (action.type) {
    case PlayerListActions.SET_PLAYERS:
      return {
        ...state,
        players: [...action.payload.players],
        teamId: action.payload.teamId
      };
    case PlayerListActions.ADD_PLAYER:
      return {
        ...state,
        players: [...state.players, action.payload]
      };
    case PlayerListActions.UPDATE_PLAYER:
      const player = state.players[state.editedPlayerIndex];
      const updatedPlayer = {
        ...player,
        ...action.payload.player
      };
      const players = [...state.players];
      players[state.editedPlayerIndex] = updatedPlayer;
      return {
        ...state,
        players: players,
        editedPlayer: null,
        editedPlayerIndex: -1
      };
    case PlayerListActions.DELETE_PLAYER:
      const oldPlayers = [...state.players];
      oldPlayers.splice(state.editedPlayerIndex, 1);
      return {
        ...state,
        players: oldPlayers,
        editedPlayer: null,
        editedPlayerIndex: -1
      };
    case PlayerListActions.START_EDIT:
      const editedPlayer = {...state.players[action.payload]};
      return {
        ...state,
        editedPlayer: editedPlayer,
        editedPlayerIndex: action.payload
      };
    case PlayerListActions.STOP_EDIT:
      return {
        ...state,
        editedPlayer: null,
        editedPlayerIndex: -1
      };
    default:
      return state;
  }
}
