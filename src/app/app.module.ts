import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';

import { ShoppingListService } from './shopping-list/shared/services/shopping-list.service';
import { RecipesService } from './recipes/shared/services/recipes.service';
import { DataStorageService } from './shared/services/data-storage.service';
import { AuthService } from './auth/shared/services/auth.service';
import { AuthGuard } from './auth/shared/services/auth-guard.service';
import { DropdownDirective } from './shared/directives/dropdown.directive';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    AuthModule,
    ShoppingListModule,
    SharedModule
  ],
  providers: [ ShoppingListService, RecipesService, DataStorageService, AuthService, AuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
