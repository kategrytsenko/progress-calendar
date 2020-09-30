import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatInputModule,
  MatButtonModule,
  MatDividerModule,
  MatGridListModule,
  MatIconModule,
  MatDatepickerModule,
  MatSelectModule,
  MatNativeDateModule,
  MatToolbarModule,
  // MatDatepicker
} from '@angular/material';

import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarCellComponent } from './calendar-cell/calendar-cell.component';
import { TimeInputComponent } from './time-input/time-input.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TasksListItemComponent } from './tasks-list-item/tasks-list-item.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    CalendarCellComponent,
    TimeInputComponent,
    TasksListComponent,
    TasksListItemComponent,
    TaskFormComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatGridListModule,
    MatIconModule,
    MatDatepickerModule,
    MatSelectModule,
    MatNativeDateModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
