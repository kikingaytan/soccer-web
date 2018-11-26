import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { TeamsEventsEditComponent } from './teams-events-edit.component';
@Component({
    selector: 'app-teams-events-edit-popup',
    template: ''
  })
export class TeamsEventsEditPopupComponent implements OnInit, OnDestroy {
  ngbModalRef: NgbModalRef;
  routeSub: any;
  constructor(
    private route: ActivatedRoute
  ) {
  }
  ngOnInit() {
    this.routeSub = this.route.params.subscribe( (params) =>{
      if (params['id']) {
          console.log('open ID ' + params['id']);
        this.open(TeamsEventsEditComponent as Component , params['id']);
      } else {
        console.log('open TeamsEventsEditComponent ');
        this.open(TeamsEventsEditComponent as Component , params['id']);
      }
    });
  }
  open(component: Component, id?: number | any): Promise<NgbModalRef>{
    return new Promise<NgbModalRef>((resolve, reject) => {
     const isOpen = this.ngbModalRef !== null;
     if (isOpen) {
      resolve(this.ngbModalRef);
     }
     if (id) {
      resolve(this.ngbModalRef);
     } else {
      resolve(this.ngbModalRef);
     }
    });
  }
  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}
