import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './banner/banner.component';
import { MaterialModule } from 'src/app/shared/material/material.module';

@NgModule({
  declarations: [HomeComponent, BannerComponent],
  imports: [CommonModule, HomeRoutingModule, MaterialModule],
})
export class HomeModule {}
