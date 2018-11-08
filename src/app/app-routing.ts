import {NgModule} from '@angular/core';
import { HomeComponent } from './home/home.component';
import { TeamsComponent } from './teams/teams.component';
import { PeopleComponent } from './people/people.component';
import { AddressesComponent } from './addresses/addresses.component';
import {Routes, RouterModule} from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { TeamsEventsComponent } from './teams/teams-events/teams-events.component';
import { TournamentsComponent } from './tournaments/tournaments.component';
const appRoutes : Routes =[
    { path : '',component:HomeComponent},
    { path : 'teams', component:TeamsComponent},
    { path : 'people', component: PeopleComponent},
    { path : 'events', component: TeamsEventsComponent},
    { path : 'addresses',component:AddressesComponent},
    { path : 'tournaments', component:TournamentsComponent}
    { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'} },
    { path: '**', redirectTo: '/not-found' }
  ];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports:[RouterModule]
    })
export class AppRoutingModule{
    
}