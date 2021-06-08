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
  currentTask: TaskModel;

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
    this.editMode = true;
    this.currentTask = {
      id: null,
      name: '',
      startDate: new Date(),
      endDate: new Date(),
      iterance: ''
    };
  }

  // TODO:
  onTaskEdit(task) {
    this.editMode = true;
    this.currentTask = task;
  }

  onTaskDelete(taskId: string) {
    this.tasksService.deleteTask(taskId);
  }
}
