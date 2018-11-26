import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import * as fromApp from '../../teams/store/team.reducers';
import * as TeamAction from '../../teams/store/team.action';
@Component({
    selector:'app-header',
    templateUrl:'./header.component.html'
})
export class HeaderComponent implements OnInit{

    constructor(private store: Store<fromApp.State>){}
    ngOnInit() {
    }
    onSaveData() {
        this.store.dispatch(new TeamAction.StoreTeams());
    }
    onFetchData() {
        this.store.dispatch(new TeamAction.FetchTeams());
    }
}