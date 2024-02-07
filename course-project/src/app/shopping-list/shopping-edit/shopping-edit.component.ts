import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {share} from "rxjs";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {
  @ViewChild('nameInput', {static: false}) nameInputRef: ElementRef
  @ViewChild('amountInput', {static: false}) amountInputRef: ElementRef
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  addToShippingList() {
    const ingredientName = this.nameInputRef.nativeElement.value
    const ingredientAmount = this.amountInputRef.nativeElement.value
    const newIngredient = new Ingredient(ingredientName, ingredientAmount)

    this.ingredientAdded.emit(newIngredient);
  }
}
