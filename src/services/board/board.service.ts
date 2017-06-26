import { Injectable } from '@angular/core';
import { LocalStorageService } from '../local-storage/local-storage.service';

@Injectable()
export class BoardService {
  boards = [];
  constructor(private localStorageService: LocalStorageService) {
    this.boards = this.localStorageService.getCache('boards');
  }

  createBoard(board): void {
   console.log('board service', board);
   this.boards.push(board);
   this.localStorageService.cacheDate('boards', this.boards);
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
