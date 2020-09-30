import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
  @Input() tasksList;
  editMode = false;
  taskToEdit: object;

  constructor() { }

  ngOnInit() {
  }

  addNewTask() {
    this.editMode = true;
    this.taskToEdit = {
      name: '',
      startDate: '',
      endDate: '',
      iterance: ''
    };
  }

  editTask(task) {
    this.editMode = true;
    this.taskToEdit = task;
  }
}
