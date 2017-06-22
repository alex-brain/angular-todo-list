import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'board-creator',
  templateUrl: './board-creator.component.html',
  styleUrls: ['./board-creator.component.css']
})
export class BoardCreatorComponent implements OnInit {

  constructor() { }

  addBoard(e, title) {
    e.preventDefault();
    console.log('board', title);
  }

  ngOnInit() {
  }

}
