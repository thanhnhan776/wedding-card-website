import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxHideOnScrollModule } from 'ngx-hide-on-scroll';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from './material/material.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SidenavMenuComponent } from './sidenav-menu/sidenav-menu.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    SidenavMenuComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    NgxHideOnScrollModule,
  ],
  exports: [
    MaterialModule,
    NgxHideOnScrollModule,
    HeaderComponent,
    SidenavMenuComponent,
    FooterComponent,
    PageNotFoundComponent,
  ],
})
export class SharedModule {}
