import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsRoutingModule } from './cards-routing.module';
import { CardsComponent } from './cards/cards.component';
import { CardComponent } from './card/card.component';
import { ProductBoxComponent } from './product-box/product-box.component';
import { MaterialModule } from 'src/app/shared/material/material.module';

@NgModule({
  declarations: [CardsComponent, CardComponent, ProductBoxComponent],
  imports: [CommonModule, MaterialModule, CardsRoutingModule],
  exports: [ProductBoxComponent],
})
export class CardsModule {}
