import { Component, Input, Output } from '@angular/core';
import { TaskModel } from '../../models/task.model';
import { iteranceOptions } from '../../constants/iterance-options';
import { NgForm } from '@angular/forms';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  @Input() task: TaskModel;
  @Output() saveTask: EventEmitter<any> = new EventEmitter();
  iteranceOptions = iteranceOptions;

  onTaskSave(form: NgForm) {
    this.saveTask.emit(form);
  }
}
