import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { Category } from '../../models/category';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    
  }

  title = "Produtos Cadastrados";

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

  products: Product[] = [
    {
      id: 1,
      name: "Produto 1",
      description: "Esse é o produto 1",
      price: 19.9,
      category: this.categories[0],
      promotion: true,
      newProduct: true
    }
  ];
}
