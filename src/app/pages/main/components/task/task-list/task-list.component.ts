import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task, TaskItemBlur } from '../task-item';
import {
  TaskItemBlurEmit,
  TaskItemChangeEmit,
  TaskItemCompletedEmit,
  TaskItemEmitMode,
} from './types';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent {
  @Input() tasks: Task[] = [];

  @Output() onChangeTask = new EventEmitter<Task>();
  @Output() onChangeMode = new EventEmitter<TaskItemEmitMode>();
  @Output() onBlurTask = new EventEmitter<TaskItemBlurEmit>();
  @Output() onCompletedTask = new EventEmitter<TaskItemCompletedEmit>();

  constructor() {}

  onCompletedTaskChange(completed: Task['completed'], id: Task['id']) {
    this.onCompletedTask.emit({ id, completed });
  }

  onModeChange(mode: Task['mode'], id: Task['id']) {
    this.onChangeMode.emit({ id, mode });
  }

  onBlurTaskItem({ title }: TaskItemBlur, id: Task['id']) {
    this.onBlurTask.emit({ id, title, mode: 'read' });
  }
}
