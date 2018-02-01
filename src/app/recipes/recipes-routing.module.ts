import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes.component';
import { RecipeBaseComponent } from './recipe-base/recipe-base.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';

import { AuthGuard } from '../auth/shared/services/auth-guard.service';

const recipesRoutes = [
    { path: '', component: RecipesComponent, children: [
        { path: '', component: RecipeBaseComponent },
        { path: 'new', component: RecipeEditComponent, canActivate: [ AuthGuard ] },
        { path: ':id', component: RecipeDetailComponent },
        { path: ':id/edit', component: RecipeEditComponent, canActivate: [ AuthGuard ] }
    ] },
];

@NgModule({
    imports: [ RouterModule.forChild(recipesRoutes) ],
    exports: [ RouterModule ]
})
export class RecipesRoutingModule {}
