import { Component, OnInit, Input } from '@angular/core';
import * as _ from 'lodash';
import { TaskModel } from '../../models/task.model';
import { iteranceOptions } from '../../constants/iterance-options';
import { NgForm } from '@angular/forms';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  @Input() task: TaskModel;
  taskToEdit: TaskModel;
  iteranceOptions = iteranceOptions;

  constructor(public tasksService: TasksService) {}

  ngOnInit() {
    this.taskToEdit = _.cloneDeep(this.task);
  }

  saveTask(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const { name, startDate, endDate, iterance } = form.value;
    this.tasksService.addTask(name, startDate, endDate, iterance);
    form.resetForm();
  }
}
