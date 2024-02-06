import {Component, EventEmitter, Output} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: Recipe[] = [new Recipe('A Test Recipe', 'This is simply a test', 'https://i0.wp.com/picjumbo.com/wp-content/uploads/adding-apple-to-make-christmas-gingerbread-cookies-more-soft-free-photo.jpg?w=2210&quality=70'),
    new Recipe('Another Test Recipe', 'This is simply a test', 'https://i0.wp.com/picjumbo.com/wp-content/uploads/adding-apple-to-make-christmas-gingerbread-cookies-more-soft-free-photo.jpg?w=2210&quality=70')];
  @Output() recipeSelected = new EventEmitter<Recipe>()

  constructor() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe)
  }
}
