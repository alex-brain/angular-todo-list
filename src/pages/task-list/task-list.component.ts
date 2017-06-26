import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {TaskService} from '../../services/task/task.service';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit, OnChanges {
  @Input() boardId;
  @Input() taskList;
  tasks = [];
  constructor(private taskService: TaskService) {}

  getTasks() {
    /*this.tasks = this.taskService.getTaskListByBoardId(this.boardId);
    this.myTasks = this.tasks.filter((task, i) => {
        return true;
    });*/
    this.tasks = this.taskService.getTaskListByBoardId(this.boardId);
    console.log('taskList', this.tasks);
  }
  deleteTask(taskId) {
    this.taskService.deleteTask(taskId);
    this.getTasks();
  }
  getTaskListCount(): number {
    return this.tasks.length;
  }
  getActiveTaskListCount(): number {
    let activeTasks = 0;
    this.tasks.map(task => {
      if (!task.completed) {
        activeTasks++;
      }
    });
    return activeTasks;
  }
  ngOnInit() {
    this.getTasks();
    console.log('task id ' + this.boardId, this.tasks);
  }
  ngOnChanges() {
    this.getTasks();
  }

}
