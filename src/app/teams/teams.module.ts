import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { TeamsComponent } from './teams.component';
import { TeamsRoutingModule } from './teams-routing.module';
import { SharedModule } from '../shared/shared.module';
import { teamReducer } from './store/team.reducers';

import { TeamsEventsComponent } from './teams-events/teams-events.component';
import { TeamsPlayersComponent } from './teams-players/teams-players.component';
import { TeamsCoachesComponent } from './teams-coaches/teams-coaches.component';


//import { RecipeEffects } from './store/recipe.effects';
import { TeamItemComponent } from './teams-list/team-item/team-item.component';
import { TeamsListComponent } from './teams-list/teams-list.component';
import { TeamsDetailComponent } from './teams-detail/teams-detail.component';
import { TeamsEditComponent } from './teams-edit/teams-edit.component';
import { TeamsStartComponent } from './teams-start/teams-start.component';
import { TeamsEventsListComponent } from './teams-events/teams-events-list/teams-events-list.component';
import { TeamsEventsEditComponent } from './teams-events/teams-events-edit/teams-events-edit.component';
import { TeamsEventsDetailComponent } from './teams-events/teams-events-detail/teams-events-detail.component';

@NgModule({
  declarations: [
    TeamsListComponent,
    TeamItemComponent,
    TeamsComponent,
    TeamsEventsComponent,
    TeamsPlayersComponent,
    TeamsCoachesComponent,
    TeamsDetailComponent,
    TeamsEditComponent,
    TeamsStartComponent,
    TeamsEventsListComponent,
    TeamsEventsEditComponent,
    TeamsEventsDetailComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TeamsRoutingModule,
    SharedModule,
    StoreModule.forFeature('teams', teamReducer)
    //,
   // EffectsModule.forFeature([RecipeEffects])
  ]
})
export class TeamsModule {}
