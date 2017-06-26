import { Injectable } from '@angular/core';
import { LocalStorageService } from '../local-storage/local-storage.service';


@Injectable()
export class TaskService {
  tasks = [];
  constructor(private localStorageService: LocalStorageService) {
    if (this.localStorageService.getCache('tasks')) {
      this.tasks = this.localStorageService.getCache('tasks');
    }
  }

  createTask(task): void {
    this.tasks.push(task);
    this.localStorageService.cacheDate('tasks', this.tasks);

  }
  deleteTask(taskId) {
    this.tasks.forEach((task, i) => {
      if (task.id === taskId) {
        // console.log('board i', i);
        this.tasks.splice(i, 1);
      }
    });
  }
  editTask(title, taskId) {
    this.tasks.forEach((task, i) => {
      if (task.id === taskId) {
        this.tasks[i].title = title;
      }
    });
    this.localStorageService.cacheDate('tasks', this.tasks);
  }
  saveChanges(taskId) {
    this.tasks.forEach((task, i) => {
      if (task.id === taskId) {
        this.tasks[i].completed = !this.tasks[i].completed;
      }
    });
    this.localStorageService.cacheDate('tasks', this.tasks);
  }
  getTaskList(): any[] {
    return this.tasks;
  }
  getTaskListByBoardId(boardId) {
    const tasks = this.getTaskList();
    const myTasks = [];
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].boardId === boardId) {
        myTasks.push(tasks[i]);
      }
    }
    console.log('tasks by id', myTasks);
    return myTasks;
  }
}
