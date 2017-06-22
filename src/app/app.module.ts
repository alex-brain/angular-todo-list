import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BoardCreatorComponent } from '../pages/board-creator/board-creator.component';

import { BoardService } from '../services/board.service';

@NgModule({
  declarations: [
    AppComponent,
    BoardCreatorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    BoardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
