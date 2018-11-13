import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { TeamsComponent } from './teams.component';
import { TeamsRoutingModule } from './teams-routing.module';
import { SharedModule } from './shared/shared.module';
import { teamReducer } from './store/team.reducers';

import { TeamsEventsComponent } from './teams-events/teams-events.component';
import { TeamsPlayersComponent } from './teams-players/teams-players.component';
import { TeamsCoachesComponent } from './teams-coaches/teams-coaches.component';


//import { RecipeEffects } from './store/recipe.effects';

@NgModule({
  declarations: [
    TeamsComponent,
    TeamsEventsComponent,
    TeamsPlayersComponent,
    TeamsCoachesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TeamsRoutingModule,
    SharedModule,
    StoreModule.forFeature('teams', teamReducer)//,
   // EffectsModule.forFeature([RecipeEffects])
  ]
})
export class TeamsModule {}
