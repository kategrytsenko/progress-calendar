export interface TaskModel {
  id: string;
  name: string;
  startDate: Date;
  endDate: Date;
  iterance: string;
  description?: string;
  taskHoursEstimation?: number;
  hoursPerDayAvailability?: number;
}
