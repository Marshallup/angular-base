import { Component } from '@angular/core';
import { Task } from 'src/app/models';
import {
  TaskItemBlurEmit,
  TaskItemCompletedEmit,
  TaskItemEmitMode,
} from './components/task/task-list';
import { getUniqId } from 'src/app/share/utils';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { TaskState } from 'src/app/reducers/task';
import { getTaskById, selectTasks } from 'src/app/reducers/task/task.selector';
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
  // tasks: Task[] = [];

  tasks$: Observable<Task[]> = this.taskStore$.pipe(select(selectTasks));

  constructor(private taskStore$: Store<TaskState>) {
    // this.tasks = [
    //   {
    //     id: getUniqId('task'),
    //     title: 'sss',
    //     completed: false,
    //     mode: 'read',
    //   },
    //   {
    //     id: getUniqId('task'),
    //     title: 'q2323',
    //     completed: true,
    //     mode: 'read',
    //   },
    // ];
  }

  // getTaskById(id: Task['id']) {
  //   // return this.tasks$.find((task) => task.id === id);
  //   // return this.tasks$;

  //   return this.taskStore$.pipe(select(getTaskById(id)))
  // }

  onChangeTask(event: Task) {
    // const { id, ...taskData } = event;
    // const taskIdx = this.tasks.findIndex((taskItem) => taskItem.id === id);
    // if (taskIdx > -1) {
    //   this.tasks[taskIdx] = {
    //     id,
    //     ...taskData,
    //   };
    // }
  }

  onChangeMode({ id, mode }: TaskItemEmitMode) {
    this.taskStore$.dispatch(updateTaskModeById({ id, mode }));
    // const task = this.getTaskById(id);
    // if (task) {
    //   task.mode = mode;
    // }
  }

  onBlurTask({ id, title, mode }: TaskItemBlurEmit) {
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
