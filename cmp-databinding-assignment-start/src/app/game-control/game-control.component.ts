import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css'
})
export class GameControlComponent {
  @Output() intervalFired = new EventEmitter<number>;
  interval;
  incrementNumber = 0;

  startGame() {
    // this.amount.emit({amount: })
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.incrementNumber + 1)
      this.incrementNumber++
    }, 1000)
  }

  pauseGame() {
    clearInterval(this.interval);
  }

  // incrementNumber() {
  //   this.amount++
  // }

}
