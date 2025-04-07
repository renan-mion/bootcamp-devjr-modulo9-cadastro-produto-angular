import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/category';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  title = "Produtos Cadastrados";
  categories: Category[] = [];
  product: Product = {} as Product;
  products: Product[] = [];

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categories = this.categoryService.getCategories()
  }

  saveProduct() {
    this.product.id = this.products.length + 1;
    console.log(this.product);
    this.products.push(this.product);
    this.product = {} as Product;
  }
}
