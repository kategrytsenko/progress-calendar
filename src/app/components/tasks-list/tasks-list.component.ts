import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TaskModel } from '../../models/task.model';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit, OnDestroy {
  tasksList: TaskModel[] = [];
  private tasksSub: Subscription;
  editMode = false;
  newTaskMode = false;
  currentTask: TaskModel;
  displayedColumns: string[] = ['name', 'dateRange', 'iterance', 'taskHoursEstimation', 'hoursPerDayAvailability', 'description', 'buttons'];

  constructor(public tasksService: TasksService) {
  }

  ngOnInit() {
    this.tasksService.getTasks();
    this.tasksSub = this.tasksService.getTaskUpdateListener()
      .subscribe((tasks: TaskModel[]) => {
        this.tasksList = tasks;
      });
  }

  ngOnDestroy(): void {
    this.tasksSub.unsubscribe();
  }

  addNewTask() {
    this.newTaskMode = true;
    this.currentTask = {
      id: null,
      name: '',
      startDate: new Date(),
      endDate: new Date(),
      iterance: ''
    };
  }

  onTaskEdit(task) {
    this.editMode = true;
    this.currentTask = task;
  }

  onTaskDelete(taskId: string) {
    this.tasksService.deleteTask(taskId);
  }

  onTaskSave(form) {
    if (form.invalid) {
      return;
    }
    const { name, startDate, endDate, iterance, description, taskHoursEstimation, hoursPerDayAvailability } = form.value;
    if (!this.editMode) {
      this.tasksService.addTask({
        id: null,
        name,
        startDate,
        endDate,
        iterance,
        description,
        taskHoursEstimation,
        hoursPerDayAvailability
      });
    } else {
      this.tasksService.editTask({
        id: this.currentTask.id,
        name,
        startDate,
        endDate,
        iterance,
        description,
        taskHoursEstimation,
        hoursPerDayAvailability
      });
    }
    this.editMode = false;
    this.newTaskMode = false;
    this.currentTask = null;
    form.resetForm();
  }
}
