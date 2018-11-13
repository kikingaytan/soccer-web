import { ActionReducerMap } from '@ngrx/store';

import * as fromPlayerList from './player-list.reducers';
import * as fromTeams from './team.reducers';

export interface AppState {
  playerList: fromPlayerList.State,
  teams: fromTeams.State
}

export const reducers: ActionReducerMap<AppState> = {
  playerList: fromPlayerList.playerListReducer,
  teams: fromTeams.teamReducer
};
