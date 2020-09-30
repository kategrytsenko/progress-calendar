import { Component, OnInit, Input } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  // TODO: add interface
  @Input() task: object;
  taskToEdit: object;
  range;

  constructor() {
  }

  ngOnInit() {
    this.taskToEdit = _.cloneDeep(this.task);
  }

  saveTask() {
console.log(this.taskToEdit);
console.log(this.range);
  }

}
