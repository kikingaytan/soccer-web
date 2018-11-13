import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { TeamsComponent } from './teams/teams.component';
import { TeamsListComponent } from './teams/teams-list/teams-list.component';
import { TeamsEventsComponent } from './teams/teams-events/teams-events.component';
import { TeamsPlayersComponent } from './teams/teams-players/teams-players.component';
import { TeamsCoachesComponent } from './teams/teams-coaches/teams-coaches.component';
import { TeamItemComponent } from './teams/teams-list/team-item/team-item.component';
import { PeopleComponent } from './people/people.component';
import { AddressesComponent } from './addresses/addresses.component';
import { AddressEditComponent } from './addresses/address-edit/address-edit.component';
import { PersonEditComponent } from './people/person-edit/person-edit.component';
import { HomeComponent } from './core/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { TournamentsComponent } from './tournaments/tournaments.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './teams/store/app.reducers';
import { SharedModule } from './teams/shared/shared.module';
@NgModule({
  declarations: [
    AppComponent
    //HomeComponent,
    ////HeaderComponent,
    //TeamsComponent,
    //TeamsListComponent,
    //TeamsEventsComponent,
    //TeamsPlayersComponent,
    //TeamsCoachesComponent,
    //TeamItemComponent,
    //PeopleComponent,
    //AddressesComponent,
    //AddressEditComponent,
    //PersonEditComponent,
    //TournamentsComponent,
    //ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    StoreModule.forRoot(reducers),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
