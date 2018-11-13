import { Component, OnInit, Input } from '@angular/core';
import { Team } from '../../shared/model/team.model';

@Component({
  selector: 'app-team-item',
  templateUrl: './team-item.component.html',
  styleUrls: ['./team-item.component.css']
})
export class TeamItemComponent implements OnInit {
  @Input() team:Team;
  @Input() index:number;
  constructor() { }

  ngOnInit() {
  }

}
