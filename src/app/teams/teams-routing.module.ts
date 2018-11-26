import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { TeamsComponent } from './teams.component';
import { TeamsEventsComponent } from './teams-events/teams-events.component';
import { TeamsPlayersComponent } from './teams-players/teams-players.component';
import { TeamsCoachesComponent } from './teams-coaches/teams-coaches.component';
import { TeamsListComponent } from './teams-list/teams-list.component';
import { TeamsEditComponent } from './teams-edit/teams-edit.component';
import { TeamsStartComponent } from './teams-start/teams-start.component';
import { TeamsDetailComponent } from './teams-detail/teams-detail.component';
import { TeamsEventsDetailComponent } from './teams-events/teams-events-detail/teams-events-detail.component';
import { TeamsEventsEditPopupComponent } from './teams-events/teams-events-edit/teams-events-edit-popup.component';


const appRoutes: Routes = [
    { path : '', component: TeamsComponent, children: [
        { path : '', component: TeamsStartComponent},
        { path : 'new', component: TeamsEditComponent},
        { path : ':id', component: TeamsDetailComponent },
        { path : ':id/edit', component: TeamsEditComponent },
        { path : ':id/events', component: TeamsEventsComponent, children: [
            //{ path: ':id', component: TeamsEventsDetailComponent }, funciona
            {
                path : ':id',
                component: TeamsEventsDetailComponent,
                outlet: 'popup'
            }
            ]
        },
        { path : ':id/player', component: TeamsPlayersComponent},
        { path : ':id/coach', component: TeamsCoachesComponent},
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
export class TeamsRoutingModule {
}