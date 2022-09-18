import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/data/product/product';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.scss'],
})
export class ProductBoxComponent implements OnInit {
  @Input() product: Product | undefined;
  @Output() viewProductClicked = new EventEmitter<Product>();
  @Output() addToCartClicked = new EventEmitter<Product>();

  productBaseHref = './cards/';

  constructor() {}

  ngOnInit(): void {}

  handleAddToCartClicked(): void {
    this.addToCartClicked.emit(this.product);
  }
}
