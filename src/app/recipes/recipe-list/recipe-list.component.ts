import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://c.pxhere.com/images/a1/57/0ba7cb8200ca6825bc3d76d88882-1620847.jpg!d'
    ),
    new Recipe(
      'Another Test Recipe',
      'This is simply a test',
      'https://c.pxhere.com/images/a1/57/0ba7cb8200ca6825bc3d76d88882-1620847.jpg!d'
    ),
  ];

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
