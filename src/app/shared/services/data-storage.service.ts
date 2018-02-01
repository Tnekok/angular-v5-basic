import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { RecipesService } from '../../recipes/shared/services/recipes.service';
import { Recipe } from '../../recipes/shared/models/recipe.model';

@Injectable()
export class DataStorageService {

    private firebaseUrl = 'https://ng-basic-http.firebaseio.com/';

    constructor(private http: Http, private recipesService: RecipesService) {}

    storeRecipes() {
        // firebase expects a PUT to rewrite the data in the DB, other db might expect other type of request
        let recipes = this.recipesService.getRecipes();
        recipes = this.formatRecipes(recipes);
        return this.http.put(this.firebaseUrl + 'recipes.json', recipes);
    }

    getRecipes() {
        this.http.get(this.firebaseUrl + 'recipes.json')
            .map((response: Response) => {
                let recipes: Recipe[] = response.json();
                recipes = this.formatRecipes(recipes);
                return recipes;
            })
            .subscribe(
                (recipes: Recipe[]) => this.recipesService.setRecipes(recipes)
            );
    }

    private formatRecipes(recipes) {
        for (const recipe of recipes) {
            if (!recipe['ingredients']) {
                console.log('no ingredients', recipe);
                recipe['ingredients'] = [];
            }
        }
        return recipes;
    }
}
