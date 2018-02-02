import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';

import { ShoppingListService } from '../shopping-list/shared/services/shopping-list.service';
import { RecipesService } from '../recipes/shared/services/recipes.service';
import { DataStorageService } from '../shared/services/data-storage.service';
import { AuthService } from '../auth/shared/services/auth.service';
import { AuthInterceptor } from '../shared/services/auth.interceptor';
import { LogginInterceptor } from '../shared/services/loggin.interceptor';


@NgModule({
    declarations: [ HeaderComponent, HomeComponent ],
    imports: [ SharedModule, AppRoutingModule ],
    exports: [ AppRoutingModule, HeaderComponent ],
    providers: [
        ShoppingListService,
        RecipesService,
        DataStorageService,
        AuthService,
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: LogginInterceptor, multi: true }
    ],
})
export class CoreModule { }
