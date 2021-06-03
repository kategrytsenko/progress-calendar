import { TaskModel } from '../models/task.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks: TaskModel[] = [];
  private tasksUpdated = new Subject<TaskModel[]>();

  getTasks() {
    //copy of the array
    return [...this.tasks];
  }

  getTaskUpdateListener() {
    return this.tasksUpdated.asObservable();
  }

  addTask(name: string, startDate: Date, endDate: Date, iterance: string) {
    const task: TaskModel = { name, startDate, endDate, iterance };
    this.tasks.push(task);
    this.tasksUpdated.next([...this.tasks]);
  }
}
