import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../task-item';
import { TaskItemChangeEmit } from './types';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent {
  @Input() tasks: Task[] = [];

  @Output() onChangeTask = new EventEmitter<TaskItemChangeEmit>();

  constructor() {}

  onCompletedTask(completed: boolean, id: string) {
    this.onChangeTask.emit({ completed, id });
  }
}
