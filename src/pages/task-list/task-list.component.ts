import { Component, OnInit, Input } from '@angular/core';
import {TaskService} from '../../services/task/task.service';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  @Input() boardId: string;
  tasks = [];
  constructor(private taskService: TaskService) {
    this.tasks = this.taskService.getTaskList(this.boardId);
  }

  ngOnInit() {
  }

}
