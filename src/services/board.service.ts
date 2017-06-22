import { Injectable } from '@angular/core';

@Injectable()
export class BoardService {
  boards = [];
  constructor() { }

  createBoard(title: string): void {
   console.log('board service', title);
   this.boards.push({title: title});
   console.log('boards', this.boards);
  }
}
