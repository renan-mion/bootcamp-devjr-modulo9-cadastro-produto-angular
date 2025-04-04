import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { Category } from '../../models/category';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    
  }

  title = "Formulário de Cadastro";

  @Input()
  categories: Category[] = []

  product: Product = {} as Product;
}
