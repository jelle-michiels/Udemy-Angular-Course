import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  displayDetails = false;
  numbers = [];

  changeDisplay() {
    this.displayDetails = !this.displayDetails;
    // this.numbers.push(this.numbers.length + 1);
    this.numbers.push(new Date());
  }
}


