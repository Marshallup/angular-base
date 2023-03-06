import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Task } from 'src/app/models';
import { TaskState } from 'src/app/reducers/task';
import { removeTaskById } from 'src/app/reducers/task/task.actions';
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

  constructor(private taskStore$: Store<TaskState>) {}

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
    if (!title) {
      this.taskStore$.dispatch(removeTaskById({ id }));
    } else {
      this.onBlurTask.emit({ id, title, mode: 'read' });
    }
  }
}
