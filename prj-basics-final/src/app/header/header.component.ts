import { Component, Output, EventEmitter } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(private dataStorageService: DataStorageService) {

  }
  saveRecipes() {
    this.dataStorageService.saveRecipes();
  }

  fetchRecipes() {
    this.dataStorageService.fetchRecipes().subscribe();
  }
}
