import {Component, ElementRef, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {
  @ViewChild('nameInput', {static: false}) nameInputRef: ElementRef
  @ViewChild('amountInput', {static: false}) amountInputRef: ElementRef

  constructor(private shoppingListService: ShoppingListService) {
  }

  addToShippingList() {
    const ingredientName = this.nameInputRef.nativeElement.value
    const ingredientAmount = this.amountInputRef.nativeElement.value
    const newIngredient = new Ingredient(ingredientName, ingredientAmount)

    this.shoppingListService.addIngredient(newIngredient)
  }
}
