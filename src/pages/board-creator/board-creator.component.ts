import { Component, OnInit } from '@angular/core';
import { BoardService } from '../../services/board.service';


@Component({
  selector: 'board-creator',
  templateUrl: './board-creator.component.html',
  styleUrls: ['./board-creator.component.css']
})
export class BoardCreatorComponent implements OnInit {

  constructor(private boardService: BoardService) { }

  createBoard(e, title) {
    e.preventDefault();
    this.boardService.createBoard(title);
  }

  ngOnInit() {
  }

}
