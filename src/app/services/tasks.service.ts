import { TaskModel } from '../models/task.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks: TaskModel[] = [];
  private tasksUpdated = new Subject<TaskModel[]>();

  constructor(private http: HttpClient) {
  }

  getTasks() {
    this.http.get<{message: string, tasks: TaskModel[]}>('http://localhost:3000/api/tasks')
      .subscribe((tasksData) => {
        this.tasks = tasksData.tasks;
        this.tasksUpdated.next([...this.tasks]);
      });

    // copy of the array
    // return [...this.tasks];
  }

  getTaskUpdateListener() {
    return this.tasksUpdated.asObservable();
  }

  addTask(name: string, startDate: Date, endDate: Date, iterance: string) {
    const task: TaskModel = { id: null, name, startDate, endDate, iterance };
    this.http.post<{message: string}>('http://localhost:3000/api/tasks', task)
      .subscribe((responsData) => {
        console.log(responsData.message);
        this.tasks.push(task);
        this.tasksUpdated.next([...this.tasks]);
      });
  }
}
