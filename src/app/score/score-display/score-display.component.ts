import { Component, OnInit, Input } from '@angular/core';
import { Score } from '../score';

@Component({
  selector: 'app-score-display',
  templateUrl: './score-display.component.html',
  styleUrls: ['./score-display.component.sass']
})
export class ScoreDisplayComponent implements OnInit {
  private _score : Score;
  private _valid : boolean;
  private _value : number;

  @Input()
  set score(newScore : Score) {
    this._score = newScore;
    if (this._score) this.calcScore();
  }

  @Input()
  set valid(validity: boolean) {
    this._valid = validity;
  }

  constructor() { }

  ngOnInit() {
  }

  calcScore() {
    this._value = this._score.followers + this._score.repos;
  }

}
