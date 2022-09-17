import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/data/menu/menu';
import { MenuService } from 'src/app/data/menu/menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  menu: MenuItem[] = [];

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.menuService.getMenu().subscribe((menu: MenuItem[]) => {
      this.menu = menu;
    });
  }
}
