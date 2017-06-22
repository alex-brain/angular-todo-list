import { Injectable } from '@angular/core';

@Injectable()
export class BoardService {
  boards = [];
  constructor() { }

  createBoard(board): void {
   console.log('board service', board);
   this.boards.push(board);
   console.log('boards', this.boards);
  }
  deleteBoard(boardId) {
   this.boards.forEach((board, i) => {
      if (board.id === boardId) {
        console.log('board i', i);
        this.boards.splice(i, 1);
      }
    });
  }
}
