import { Injectable } from '@angular/core';

@Injectable()
export class TaskService {
  tasks = [];
  constructor() { }

  createTask(task): void {
    this.tasks.push(task);
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
    })
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
