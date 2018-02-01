import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';

import { ShoppingListService } from '../shopping-list/shared/services/shopping-list.service';
import { RecipesService } from '../recipes/shared/services/recipes.service';
import { DataStorageService } from '../shared/services/data-storage.service';
import { AuthService } from '../auth/shared/services/auth.service';


@NgModule({
    declarations: [ HeaderComponent, HomeComponent ],
    imports: [ SharedModule, AppRoutingModule ],
    exports: [ AppRoutingModule, HeaderComponent ],
    providers: [ ShoppingListService, RecipesService, DataStorageService, AuthService ],
})
export class CoreModule { }
