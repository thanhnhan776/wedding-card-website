import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/data/product/product';
import { ProductService } from 'src/app/data/product/product.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((productList: Product[]) => {
      this.products = productList;
    });
  }
}
