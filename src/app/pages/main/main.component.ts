import { Component } from '@angular/core';
import { Task } from './components/task/task-item';
import {
  TaskItemBlurEmit,
  TaskItemChangeEmit,
  TaskItemCompletedEmit,
  TaskItemEmitMode,
} from './components/task/task-list';
import { SimpleUniqIdService } from 'src/app/share/service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  tasks: Task[] = [];

  constructor(private simpleUniqService: SimpleUniqIdService) {
    this.tasks = [
      {
        id: this.simpleUniqService.getUniqId('task'),
        title: 'sss',
        completed: false,
        mode: 'edit',
      },
      {
        id: this.simpleUniqService.getUniqId('task'),
        title: 'q2323',
        completed: true,
        mode: 'read',
      },
    ];
  }

  getTaskById(id: Task['id']) {
    return this.tasks.find((task) => task.id === id);
  }

  onChangeTask(event: Task) {
    const { id, ...taskData } = event;

    const taskIdx = this.tasks.findIndex((taskItem) => taskItem.id === id);

    if (taskIdx > -1) {
      this.tasks[taskIdx] = {
        id,
        ...taskData,
      };
    }
  }

  onChangeMode({ id, mode }: TaskItemEmitMode) {
    const task = this.getTaskById(id);

    if (task) {
      task.mode = mode;
    }
  }

  onBlurTask({ id, title, mode }: TaskItemBlurEmit) {
    const task = this.getTaskById(id);

    if (task) {
      task.title = title;
      task.mode = mode;
    }
  }

  onCompletedTask({ id, completed }: TaskItemCompletedEmit) {
    const task = this.getTaskById(id);

    if (task) {
      task.completed = completed;
    }
  }
}
