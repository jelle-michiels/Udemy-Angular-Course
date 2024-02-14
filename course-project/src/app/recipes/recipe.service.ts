import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Tasty Schnitzel',
      'This is simply a test',
      'https://www.fearlessdining.com/wp-content/uploads/2020/12/gluten-free-schnitzel-hero-1200.jpg',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]),
    new Recipe('Big Fat Burger',
      'What else do you need to say?',
      'https://media.istockphoto.com/id/1498243668/fr/photo/cheeseburger-savoureux-avec-laitue-fromage-cheddar-tomate-et-cornichons-petit-pain-burger-aux.jpg?s=2048x2048&w=is&k=20&c=TFzcKdAbYk2mpIFIkybE-WhMuyXRHMonIbDaiQhY6Cc=',
      [new Ingredient('Buns', 2), new Ingredient('Meat', 1), new Ingredient('Tomato', 1), new Ingredient('Lettuce', 1), new Ingredient('Cheese', 1)])
  ];

  constructor() {
  }

  getRecipes() {
    return this.recipes.slice();
  }
}
