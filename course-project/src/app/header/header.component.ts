import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})

export class HeaderComponent {
  collapsed = true;
  @Output() selected = new EventEmitter<string>();

  changeSelected(selected: string) {
    this.selected.emit(selected);
  }
}
