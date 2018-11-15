import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { HomeComponent } from "./core/home/home.component";
import { PersonEditComponent } from "./people/person-edit/person-edit.component";
import { AddressEditComponent } from "./addresses/address-edit/address-edit.component";
import { TournamentsComponent } from "./tournaments/tournaments.component";
//import { ErrorPageComponent } from "./error-page/error-page.component";
const appRoutes: Routes=[
    { path:'',component:HomeComponent},
    { path:'teams',loadChildren:'./teams/teams.module#TeamsModule'}
    //{ path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'} },
    //{ path: '**', redirectTo: '/not-found' }

    //{ path : 'people', component: PersonEditComponent},
    //{ path : 'addresses',component:AddressEditComponent},
    //{ path : 'tournaments', component:TournamentsComponent},

]
@NgModule({
    imports:[
        RouterModule .forRoot(appRoutes,{preloadingStrategy:PreloadAllModules})
    ],
    exports:[RouterModule]
})
export class AppRoutingModule{

}