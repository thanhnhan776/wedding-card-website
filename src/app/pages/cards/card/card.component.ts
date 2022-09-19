import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Product } from 'src/app/data/product/product';
import { ProductService } from 'src/app/data/product/product.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  cardId: number = 0;
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.cardId = Number(params.get('id'));
      this.getProduct();
    });
  }

  getProduct(): void {
    this.productService
      .getProduct(this.cardId)
      .subscribe((p: Product | undefined) => {
        this.product = p;
      });
  }
}
