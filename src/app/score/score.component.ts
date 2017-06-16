import { Component, OnInit } from '@angular/core';
import { Score } from './score';
import { User } from '../interfaces/user';

import { GithubService } from '../services/github.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.sass']
})
export class ScoreComponent implements OnInit {
  private _score: Score;
  private _valid: boolean = true;

  constructor(private _gh: GithubService) { }

  ngOnInit() {
  }

  getUser(username: string) {
    this._gh.getUser(username)
    .then(this.calcScore.bind(this))
    .catch(this.invalidate.bind(this));
  }

  calcScore(user: User) {
    this._score = new Score(user.followers, user.public_repos)
    this._valid = true;
  }

  invalidate(err: Error) {
    this._score = undefined;
    this._valid = false;
  }



}
