import { Component } from '@angular/core';
import { Task } from 'src/app/models';
import {
  TaskCurrentBlurEmit,
  TaskItemCompletedEmit,
  TaskItemEmitMode,
} from './components/task/task-list';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { TaskState } from 'src/app/reducers/task';
import { selectTasks } from 'src/app/reducers/task/task.selector';
import {
  updateTaskCompletedById,
  updateTaskModeById,
  updateTaskModeTitleById,
} from 'src/app/reducers/task/task.actions';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  tasks$: Observable<Task[]> = this.taskStore$.pipe(select(selectTasks));

  constructor(private taskStore$: Store<TaskState>) {}

  onChangeTask(event: Task) {}

  onChangeMode({ id, mode }: TaskItemEmitMode) {
    this.taskStore$.dispatch(updateTaskModeById({ id, mode }));
    // const task = this.getTaskById(id);
    // if (task) {
    //   task.mode = mode;
    // }
  }

  onBlurTask({ id, title, mode }: TaskCurrentBlurEmit) {
    this.taskStore$.dispatch(updateTaskModeTitleById({ id, mode, title }));
    // const task = this.getTaskById(id);
    // if (task) {
    //   task.title = title;
    //   task.mode = mode;
    // }
  }

  onCompletedTask({ id, completed }: TaskItemCompletedEmit) {
    this.taskStore$.dispatch(updateTaskCompletedById({ id, completed }));
    // const task = this.getTaskById(id);
    // if (task) {
    //   task.completed = completed;
    // }
  }
}
