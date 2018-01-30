import { EventEmitter } from '@angular/core';

import { Recipe } from '../models/recipe.model';

export class RecipesService {

    public recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Test recipe 01', 'Description text 01', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
        new Recipe('Test recipe 02', 'Description text 02', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
    ];

    getRecipes() {
        /* .slice() with no variables will return a copy of the array, not a pointer to access the list directly */
        return this.recipes.slice();
    }
}
