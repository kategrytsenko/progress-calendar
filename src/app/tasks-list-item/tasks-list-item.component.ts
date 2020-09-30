import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tasks-list-item',
  templateUrl: './tasks-list-item.component.html',
  styleUrls: ['./tasks-list-item.component.css']
})
export class TasksListItemComponent implements OnInit {
  @Input() task: object;

  constructor() { }

  ngOnInit() {
  }

}
