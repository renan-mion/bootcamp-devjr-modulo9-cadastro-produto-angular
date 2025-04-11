import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories: Category[] = [
    {
      id: 1,
      name: "Produção Própria"
    }, {
      id: 2,
      name: "Nacional"
    }, {
      id: 3,
      name: "Importado"
    }, {
      id: 4,
      name: "Premium"
    }
  ];

  constructor(private http: HttpClient) { }

  getCategories() : Observable<Category[]> {
    return this.http.get<Category[]>("http://localhost:8080/categories");
  }

  addCategory(category: Category) {
    this.categories.push(category);
  }
}
