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

  product: Product = {} as Product;

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

  products: Product[] = [];

  saveProduct() {
    this.product.id = this.products.length + 1;
    console.log(this.product);
    this.products.push(this.product);
    this.product = {} as Product;
  }
}
