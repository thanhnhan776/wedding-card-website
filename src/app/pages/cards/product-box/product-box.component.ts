import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/data/product/product';
import { ProductService } from 'src/app/data/product/product.service';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.scss'],
})
export class ProductBoxComponent implements OnInit {
  @Input() product: Product | undefined;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {}
}
