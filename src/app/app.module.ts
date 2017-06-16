import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ScoreComponent } from './score/score.component';
import { ScoreInputComponent } from './score/score-input/score-input.component';
import { ScoreDisplayComponent } from './score/score-display/score-display.component';
import { GithubService } from './services/github.service';

@NgModule({
  declarations: [
    AppComponent,
    ScoreComponent,
    ScoreInputComponent,
    ScoreDisplayComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
  ],
  providers: [
    GithubService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
