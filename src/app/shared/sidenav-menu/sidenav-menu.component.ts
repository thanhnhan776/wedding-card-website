import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/data/menu/menu';
import { MenuService } from 'src/app/data/menu/menu.service';

@Component({
  selector: 'app-sidenav-menu',
  templateUrl: './sidenav-menu.component.html',
  styleUrls: ['./sidenav-menu.component.scss'],
})
export class SidenavMenuComponent implements OnInit {
  menu: MenuItem[] = [];

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.menuService.getMenu().subscribe((menu: MenuItem[]) => {
      this.menu = menu;
    });
  }
}
