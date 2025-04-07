import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
    products: Product[] = [];

    constructor() { }

    getProducts(): Product[] {
      return this.products;
    }

    saveProduct(product: Product): void {
      product.id = this.products.length + 1;
      this.products.push(product);
    }
}
