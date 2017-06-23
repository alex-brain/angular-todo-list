import { Component, OnInit, Input } from '@angular/core';
import {TaskService} from '../../services/task/task.service';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  @Input() boardId;
  tasks = [];
  myTasks = [];
  constructor(private taskService: TaskService) {}

  getTasks() {
    this.tasks = this.taskService.getTaskList();
    this.myTasks = this.tasks.filter((task, i) => {
        return true;
    });
    console.log('board id', this.boardId);
    console.log('myTasks', this.myTasks);
    console.log('tasks', this.tasks);
  }
  getMyTasks(e) {
    e.preventDefault();
    this.getTasks();
  }
  ngOnInit() {
    this.getTasks();
    console.log('task id ' + this.boardId, this.tasks);
  }

}
