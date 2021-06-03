import { Component, OnInit, Input } from '@angular/core';
import { TaskModel } from '../../models/task.model';

@Component({
  selector: 'app-tasks-list-item',
  templateUrl: './tasks-list-item.component.html',
  styleUrls: ['./tasks-list-item.component.css']
})
export class TasksListItemComponent implements OnInit {
  @Input() task: TaskModel;

  constructor() { }

  ngOnInit() {
  }

}
