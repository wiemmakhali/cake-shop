import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  
  categories: { name: string, description: string }[] = [
    { name: 'Category 1', description: 'Description for Category 1' },
    { name: 'Category 2', description: 'Description for Category 2' },
    { name: 'Category 3', description: 'Description for Category 3' }
  ];

  newCategory = {
    name: '',
    description: ''
  };

  addCategory() {
    this.categories.push({ name: this.newCategory.name, description: this.newCategory.description });
    this.newCategory = {
      name: '',
      description: ''
    };
  }
}