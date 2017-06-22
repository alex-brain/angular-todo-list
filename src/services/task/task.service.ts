import { Injectable } from '@angular/core';

@Injectable()
export class TaskService {
  tasks = [];
  constructor() { }

  createTask(task): void {
    this.tasks.push(task);
    console.log('tasks', this.tasks);
  }
  deleteTask(taskId) {
    this.tasks.forEach((task, i) => {
      if (task.id === taskId) {
        console.log('board i', i);
        this.tasks.splice(i, 1);
      }
    });
  }
  getTaskList(boardId) {
    return this.tasks.filter(task => task.boardId === boardId)
  }
}
