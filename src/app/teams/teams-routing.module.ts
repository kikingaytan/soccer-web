import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { TeamsComponent } from './teams.component';
import { TeamsEventsComponent } from './teams-events/teams-events.component';
import { TeamsPlayersComponent } from './teams-players/teams-players.component';
import { TeamsCoachesComponent } from './teams-coaches/teams-coaches.component';
import { ErrorPageComponent } from '../error-page/error-page.component';


const appRoutes : Routes =[
    { path : 'teams', component:TeamsComponent},
    { path : 'events', component: TeamsEventsComponent},
    { path : 'player', component:TeamsPlayersComponent},
    { path : 'coach', component:TeamsCoachesComponent},
    { path : 'event', component:TeamsEventsComponent},
    { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'} },
    { path: '**', redirectTo: '/not-found' }
  ];

  //{ path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard] },
  //{ path: ':id', component: RecipeDetailComponent },
  //{ path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard] },

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports:[RouterModule]
    })
export class TeamsRoutingModule{
    
}