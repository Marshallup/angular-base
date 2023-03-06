import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Task } from 'src/app/models';
import { TaskState } from 'src/app/reducers/task';
import { taskAdd } from 'src/app/reducers/task/task.actions';
import { getUniqId } from 'src/app/share/utils';
import { TaskItemBlurEmit } from '../task-item/types';

@Component({
  selector: 'app-task-item-create',
  templateUrl: './task-item-create.component.html',
  styleUrls: ['./task-item-create.component.scss'],
})
export class TaskItemCreateComponent {
  title: null | string = '';
  mode: Task['mode'] = 'read';

  constructor(private taskStore$: Store<TaskState>) {}

  onChangeMode(mode: Task['mode']) {
    this.mode = mode;
  }
  onBlur({ title }: TaskItemBlurEmit) {
    this.mode = 'read';

    if (title) {
      this.taskStore$.dispatch(
        taskAdd({
          id: getUniqId('task'),
          title,
          mode: 'read',
          completed: false,
          createdAt: new Date(),
        })
      );
      this.title = this.title === null ? '' : null;
    }

    // this.title = null;

    // console.log(this.title, 'title');

    // this.title = null;
  }
}
