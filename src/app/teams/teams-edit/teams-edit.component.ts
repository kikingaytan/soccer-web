import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromTeam from '../store/team.reducers'
import * as TeamActions from '../store/team.action'

@Component({
  selector: 'app-teams-edit',
  templateUrl: './teams-edit.component.html',
  styleUrls: ['./teams-edit.component.css']
})
export class TeamsEditComponent implements OnInit {
  id:number;
  editMode= false;
  teamForm: FormGroup;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private store: Store<fromTeam.FeatureState>) {
              }
  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) =>{
          //el id se combierte en un entero con el +
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
    );
  }

  onSubmit() {
    if (this.editMode) {
      this.store.dispatch(new TeamActions.UpdateTeam({
        index: this.id,
        updatedTeam: this.teamForm.value
      }));
    } else {
      this.store.dispatch(new TeamActions.AddTeam(this.teamForm.value));
    }
    this.onCancel();
  }
  onAddCoach(){
    (<FormArray>this.teamForm.get('coaches')).push(
      new FormGroup({
        'position': new FormControl(null, Validators.required),
        'description' : new FormControl(null, Validators.required)
      })
    );
  }
  onDeleteTeam( index : number) {
    (<FormArray>this.teamForm.get('coaches')).removeAt(index);
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route});
  }
  private initForm() {
    let name = '';
    let yearOfBirth = 0;
    let category = '';
    let teamCoaches = new FormArray([]);

    if (this.editMode){
      this.store.select('teams')
      //.take(1)
      .subscribe((teamState: fromTeam.State) => {
          const team = teamState.teams[this.id];
          name = team.name;
          yearOfBirth = team.yearOfBirth;
          category = team.category;
          if ( team['coaches']) {
            for ( let coach of team.coaches){
              teamCoaches.push(
                new FormGroup({
                  'position': new FormControl(coach.position, Validators.required),
                  'description': new FormControl(coach.description, Validators.required)
                })
              );
            }
          }
        }
      );
    }
    this.teamForm = new FormGroup({
      'name': new FormControl(name, Validators.required),
      'yearOfBirth': new FormControl(yearOfBirth, Validators.required),
      'category': new FormControl(category, Validators.required),
      'coaches': teamCoaches
    });
  }
  getControls() {
    return (<FormArray>this.teamForm.get('coaches')).controls;
  }

}
