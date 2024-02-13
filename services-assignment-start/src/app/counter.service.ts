import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  activeCounter: number = 0;
  inactiveCounter: number = 0;

  constructor() {
  }

  addActive() {
    this.activeCounter++;
    console.log('Active counter: ' + this.activeCounter);
  }

  addInactive() {
    this.inactiveCounter++;
    console.log('Inactive counter: ' + this.inactiveCounter);
  }
}
