import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../models/product';
import { Category } from '../../models/category';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {

  }

  title = "Formulário de Cadastro";

  @Input()
  product ?: Product = {} as Product;

  @Input()
  categories: Category[] = []

  @Output()
  saveEmitter = new EventEmitter();

  save() {
    this.saveEmitter.emit();
  }
}
