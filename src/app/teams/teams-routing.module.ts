import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { TeamsComponent } from './teams.component';
import { TeamsEventsComponent } from './teams-events/teams-events.component';
import { TeamsPlayersComponent } from './teams-players/teams-players.component';
import { TeamsCoachesComponent } from './teams-coaches/teams-coaches.component';
import { TeamsListComponent } from './teams-list/teams-list.component';


const appRoutes : Routes =[
    { path : 'teamslist', component:TeamsListComponent, children:[
        { path : 'events', component: TeamsEventsComponent},
        { path : 'player', component:TeamsPlayersComponent},
        { path : 'coach', component:TeamsCoachesComponent},
        { path : 'event', component:TeamsEventsComponent}
    ]},
    ];

  //{ path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard] },
  //{ path: ':id', component: RecipeDetailComponent },
  //{ path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard] },

@NgModule({
    imports: [
        RouterModule.forChild(appRoutes)
    ],
    exports:[RouterModule]
    })
export class TeamsRoutingModule{
    
}