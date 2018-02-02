import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { RecipesService } from '../../recipes/shared/services/recipes.service';
import { AuthService } from '../../auth/shared/services/auth.service';
import { Recipe } from '../../recipes/shared/models/recipe.model';

@Injectable()
export class DataStorageService {

    private firebaseUrl = 'https://ng-basic-http.firebaseio.com/';

    constructor(
        private httpClient: HttpClient,
        private recipesService: RecipesService,
        private authService: AuthService) {}

    storeRecipes() {
        // firebase expects a PUT to rewrite the data in the DB, other db might expect other type of request
        const token = this.authService.getToken();
        let recipes = this.recipesService.getRecipes();
        recipes = this.formatRecipes(recipes);
        return this.httpClient.put(this.firebaseUrl + 'recipes.json', recipes, {
            observe: 'body',
            responseType: 'json'
        });
    }

    getRecipes() {
        const token = this.authService.getToken();
        this.httpClient.get<Recipe[]>(this.firebaseUrl + 'recipes.json', {
            observe: 'body',
            responseType: 'json'
        })
        .map((recipes: Recipe[]) => {
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
