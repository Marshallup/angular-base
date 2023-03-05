import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Task, TaskMode } from 'src/app/models';
import { TaskState } from 'src/app/reducers/task';
import { removeTaskById } from 'src/app/reducers/task/task.actions';
import { TaskItemBlurEmit } from './types';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent {
  @Input() completed = false;
  @Input() title = '';
  @Input() id: Task['id'] = '';
  @Input() mode: Task['mode'] = 'read';

  @Output() onCompleted = new EventEmitter<boolean>();
  @Output() changeMode = new EventEmitter<TaskMode>();
  @Output() blurTaskItem = new EventEmitter<TaskItemBlurEmit>();

  completedChange(value: boolean) {
    this.onCompleted.emit(value);
  }

  onChangeMode(mode: TaskMode) {
    this.changeMode.emit(mode);
  }

  onClickTitleText() {
    this.onChangeMode('edit');
  }

  onBlurTaskItem() {
    if (!this.title) {
      this.taskStore$.dispatch(removeTaskById({ id: this.id }));
    } else {
      this.blurTaskItem.emit({
        title: this.title,
      });
    }
  }

  constructor(private taskStore$: Store<TaskState>) {}
}
