import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as _ from 'lodash';
import { TaskModel } from '../../models/task.model';
import { iteranceOptions } from '../../constants/iterance-options';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  @Input() task: TaskModel;
  @Output() taskChanged = new EventEmitter<TaskModel>();
  taskToEdit: TaskModel;
  iteranceOptions = iteranceOptions;

  constructor() {
  }

  ngOnInit() {
    this.taskToEdit = _.cloneDeep(this.task);
  }

  //
  // saveTask() {
  //   console.log(this.taskToEdit);
  //   this.taskChanged.emit(this.taskToEdit);
  // }


  saveTask(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const task: TaskModel = {
      name: form.value.name,
      startDate: form.value.startDate,
      endDate: form.value.endDate,
      iterance: form.value.iterance,
    };
    console.log(task);
    this.taskChanged.emit(task);
  }
}
