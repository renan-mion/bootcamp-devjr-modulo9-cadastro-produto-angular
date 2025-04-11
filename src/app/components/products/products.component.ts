import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/category';
import { ProductService } from '../../services/product.service';

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

  constructor(private categoryService: CategoryService, private productService: ProductService) {}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(
      {
        next: data => {this.categories = data}
      }
    );
    
    this.productService.getProducts().subscribe(
      {
        next: data => {this.products = data}
      }
    )
  }

  saveProduct(): void {
    this.productService.saveProduct(this.product);
    this.product = {} as Product;
  }
}
