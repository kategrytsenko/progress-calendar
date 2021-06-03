import { TaskModel } from '../models/task.model';

export class TasksService {
  private tasks: TaskModel[] = [];

  getTasks() {
    //copy of the array
    return [...this.tasks];
  }

  addPost( name: string, startDate: Date, endDate: Date, iterance: string) {
    const task: TaskModel = {name, startDate, endDate, iterance}
  }
}
