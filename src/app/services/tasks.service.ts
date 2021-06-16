import { TaskModel } from '../models/task.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { assign, omit } from 'lodash';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks: TaskModel[] = [];
  private tasksUpdated = new Subject<TaskModel[]>();

  constructor(private http: HttpClient) {
  }

  getTasks() {
    this.http
      .get<{ message: string, tasks: any }>('http://localhost:3000/api/tasks')
      .pipe(map((taskData) => {
        return taskData.tasks.map(task => {
          return assign({}, omit(task, '_id'), {id: task._id});
        });
      }))
      .subscribe(transformedTasks => {
        this.tasks = transformedTasks;
        this.tasksUpdated.next([...this.tasks]);
      });
  }

  getTaskUpdateListener() {
    return this.tasksUpdated.asObservable();
  }

  addTask(task: TaskModel) {
    this.http.post<{ message: string, taskId: string }>('http://localhost:3000/api/tasks', task)
      .subscribe((responsData) => {
        const id = responsData.taskId;
        task.id = id;
        this.tasks.push(task);
        this.tasksUpdated.next([...this.tasks]);
      });
  }

/*  getTask(id: string) {
    return { ...this.tasks.find(task => task.id === id) };
  }*/

  editTask(task: TaskModel) {
    this.http.put<{ message: string, taskId: string }>(`http://localhost:3000/api/tasks/${ task.id }`, task)
      .subscribe((response) => {
        const updatedTasks = [...this.tasks];
        const oldTaskIndex = updatedTasks.findIndex(updatedTask => updatedTask.id === task.id);
        updatedTasks[oldTaskIndex] = task;
        this.tasks = updatedTasks;
        this.tasksUpdated.next([...this.tasks]);
      });
  }

  deleteTask(taskId: string) {
    this.http.delete<{ message: string }>(`http://localhost:3000/api/tasks/${ taskId }`)
      .subscribe((responsData) => {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
        this.tasksUpdated.next([...this.tasks]);
      });
  }
}
