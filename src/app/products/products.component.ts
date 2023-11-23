import { Component } from '@angular/core';
import { products } from 'src/assets/config';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  products = products

}
