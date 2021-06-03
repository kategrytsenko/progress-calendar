import { Component, OnInit, Input } from '@angular/core';
import { TaskModel } from '../../models/task.model';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
  @Input() tasksList: TaskModel[];
  editMode = false;
  taskToEdit: TaskModel;

  constructor() {
  }

  ngOnInit() {
  }

  addNewTask() {
    this.editMode = true;
    this.taskToEdit = {
      name: '',
      startDate: new Date(),
      endDate: new Date(),
      iterance: ''
    };
  }

  editTask(task) {
    this.editMode = true;
    this.taskToEdit = task;
  }

  onTaskSaved(task: TaskModel) {
    // TODO: push or edit/ and we need to make http post
    // TODO: move to app - eventemitter through two components
    this.tasksList.push(task);
  }
}
