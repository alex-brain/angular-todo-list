import {Injectable} from '@angular/core';
import {LocalStorageService} from '../local-storage/local-storage.service';

@Injectable()
export class BoardService {
  boards = [];

  constructor(private localStorageService: LocalStorageService) {
    if (this.localStorageService.getCache('boards')) {
      this.boards = this.localStorageService.getCache('boards');
    }
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

  getBoardList() {
    // this.boards = this.localStorageService.getCache('boards');
    console.log('my boards', this.boards);
  }
}
