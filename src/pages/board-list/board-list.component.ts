import {Component, OnInit} from '@angular/core';
import {BoardService} from '../../services/board/board.service';
import {TaskService} from '../../services/task/task.service';
import uuidv4 from 'uuid/v4';

@Component({
  selector: 'board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.css']
})
export class BoardListComponent implements OnInit {
  boards = [];
  tasks = [];

  constructor(private boardService: BoardService,
              private taskService: TaskService) {
    this.boards = this.boardService.boards;
    this.tasks = this.taskService.tasks;
  }

  createTask(e, title, boardId) {
    e.preventDefault();
    const task = {
      id: uuidv4(),
      title: title,
      boardId: boardId
    };
    this.taskService.createTask(task);
  }

  deleteBoard(boardId) {
    console.log('delete', boardId);
    this.boardService.deleteBoard(boardId);
  }

  ngOnInit() {
  }

}
