import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-score-input',
  templateUrl: './score-input.component.html',
  styleUrls: ['./score-input.component.sass']
})
export class ScoreInputComponent implements OnInit {
  user = {
    username: ""
  }
  @Output() newUser: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  getUser() {
    this.newUser.emit(this.user.username);
  }

}
