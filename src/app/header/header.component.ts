import { Component } from '@angular/core';
import { Response } from '@angular/http';

import { DataStorageService } from '../shared/services/data-storage.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    constructor(private dataStorageService: DataStorageService) { }

    onSaveData() {
        this.dataStorageService.storeRecipes().subscribe(
            (response: Response) => console.log('onSaveDAta() response: ', response)
        );
    }

    onFetchData() {
        this.dataStorageService.getRecipes();
    }
}
