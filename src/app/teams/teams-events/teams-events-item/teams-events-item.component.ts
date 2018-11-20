import { Component, OnInit, Input } from '@angular/core';
import { Event } from 'src/app/shared/model/event.model';

@Component({
  selector: 'app-teams-events-item',
  templateUrl: './teams-events-item.component.html',
  styleUrls: ['./teams-events-item.component.css']
})
export class TeamsEventsItemComponent implements OnInit {
  @Input() event: Event;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
