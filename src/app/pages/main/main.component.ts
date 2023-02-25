import { Component } from '@angular/core';
import { Task } from 'src/app/components/task/task-item';
import { TaskItemChangeEmit } from 'src/app/components/task/task-list';
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
      },
      {
        id: this.simpleUniqService.getUniqId('task'),
        title: 'q2323',
        completed: true,
      },
    ];
  }

  onCompleteTask(event: TaskItemChangeEmit) {
    const { id, completed } = event;

    const task = this.tasks.find((taskItem) => taskItem.id === id);

    if (task) {
      task.completed = completed;
    }
  }
}
