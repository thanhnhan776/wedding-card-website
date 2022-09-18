import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/data/product/product';
import { ProductService } from 'src/app/data/product/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  featureProduts: Product[] = [];
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService
      .getFeatureProducts()
      .subscribe((products: Product[]) => {
        this.featureProduts = products;
      });
  }
}
