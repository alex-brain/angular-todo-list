import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BoardCreatorComponent } from '../pages/board-creator/board-creator.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardCreatorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
