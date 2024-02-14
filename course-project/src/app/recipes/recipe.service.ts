import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from "./recipe.model";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [new Recipe('A Test Recipe', 'This is simply a test', 'https://i0.wp.com/picjumbo.com/wp-content/uploads/adding-apple-to-make-christmas-gingerbread-cookies-more-soft-free-photo.jpg?w=2210&quality=70'),
    new Recipe('Another Test Recipe', 'This is simply a test', 'https://i0.wp.com/picjumbo.com/wp-content/uploads/adding-apple-to-make-christmas-gingerbread-cookies-more-soft-free-photo.jpg?w=2210&quality=70')];

  constructor() {
  }

  getRecipes() {
    return this.recipes.slice();
  }
}
