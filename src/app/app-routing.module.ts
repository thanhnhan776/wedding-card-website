import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { SharedModule } from './shared/shared.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
    pathMatch: 'full',
  },
  {
    path: 'home',
    redirectTo: '',
  },
  {
    path: 'cards',
    loadChildren: () =>
      import('./pages/cards/cards.module').then((m) => m.CardsModule),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./pages/contact/contact.module').then((m) => m.ContactModule),
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), SharedModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
