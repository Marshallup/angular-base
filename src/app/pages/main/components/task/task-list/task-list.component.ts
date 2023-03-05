import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/models';
import { TaskItemBlurEmit } from '../task-item';
import {
  TaskItemCompletedEmit,
  TaskItemEmitMode,
  TaskCurrentBlurEmit,
} from './types';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent {
  @Input() tasks: Task[] | null = [];

  @Output() onChangeTask = new EventEmitter<Task>();
  @Output() onChangeMode = new EventEmitter<TaskItemEmitMode>();
  @Output() onBlurTask = new EventEmitter<TaskCurrentBlurEmit>();
  @Output() onCompletedTask = new EventEmitter<TaskItemCompletedEmit>();

  constructor() {}

  trackByFn(index: number, item: Task) {
    return item.id;
  }

  onCompletedTaskChange(completed: Task['completed'], id: Task['id']) {
    this.onCompletedTask.emit({ id, completed });
  }

  onModeChange(mode: Task['mode'], id: Task['id']) {
    this.onChangeMode.emit({ id, mode });
  }

  onBlurTaskItem({ title }: TaskItemBlurEmit, id: Task['id']) {
    this.onBlurTask.emit({ id, title, mode: 'read' });
  }
}
