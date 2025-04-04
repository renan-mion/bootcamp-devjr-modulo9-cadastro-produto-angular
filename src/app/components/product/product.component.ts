import { Component } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  title = "Formulário de Cadastro";

  product: Product = {} as Product;
}
