import { Component, OnInit } from '@angular/core';
import { BoardService } from '../../services/board.service';

@Component({
  selector: 'board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.css']
})
export class BoardListComponent implements OnInit {
  boards = [];
  constructor(private boardService: BoardService) {
    this.boards = this.boardService.boards;
  }

  ngOnInit() {
  }

}
