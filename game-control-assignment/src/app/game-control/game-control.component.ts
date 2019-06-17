import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss']
})
export class GameControlComponent {
  @Output() numbers: EventEmitter<number[]> = new EventEmitter();
  numbersList: number[] = [];
  timerToRun = true;
  timer: NodeJS.Timer;

  constructor() {
    this.numbersList.push(1);
  }

  startCounter() {
    if (this.timer !== undefined) {
      this.timerToRun = true;
    } else {
      this.numbers.emit(this.numbersList);
      this.timer = setInterval(() => {
        if (this.timerToRun) {
          this.numbersList.push(this.numbersList.length + 1);
        }
      }, 1000);
    }
  }

  pauseCounter() {
    this.timerToRun = false;
  }
}
