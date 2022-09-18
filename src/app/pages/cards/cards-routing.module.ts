import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { CardsComponent } from './cards/cards.component';

const routes: Routes = [
  {
    path: '',
    component: CardsComponent,
    pathMatch: 'full',
  },
  {
    path: ':id',
    component: CardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardsRoutingModule {}
