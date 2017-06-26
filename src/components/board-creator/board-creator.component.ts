import { Component, OnInit } from '@angular/core';
import { BoardService } from '../../services/board/board.service';
import uuidv4 from 'uuid/v4';

@Component({
  selector: 'board-creator',
  templateUrl: './board-creator.component.html',
  styleUrls: ['./board-creator.component.css']
})
export class BoardCreatorComponent implements OnInit {

  constructor(private boardService: BoardService) { }

  createBoard(e, title) {
    e.preventDefault();
    const board = {
      id: uuidv4(),
      title: title
    };
    this.boardService.createBoard(board);
  }

  ngOnInit() {
  }

}
