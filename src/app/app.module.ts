import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
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
import { HomeComponent } from './home/home.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AppRoutingModule } from './app-routing';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TeamsComponent,
    TeamsListComponent,
    TeamsEventsComponent,
    TeamsPlayersComponent,
    TeamsCoachesComponent,
    TeamItemComponent,
    PeopleComponent,
    AddressesComponent,
    AddressEditComponent,
    PersonEditComponent,
    HomeComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
