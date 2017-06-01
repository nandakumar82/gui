import { Component, OnInit } from '@angular/core';
import {Routes} from '@angular/router';
//import {MenuService} from '../theme/services';
//import {PAGES_MENU} from './pages.menu';

@Component({
  selector: 'app-pages',
  template: '<page-header></page-header><div class=""><router-outlet></router-outlet></div>'
})
export class PagesComponent implements OnInit {

  //constructor(private _menuService: MenuService) { }

  constructor() { }

  ngOnInit() {
    //this._menuService.updateMenuByRoutes(<Routes>PAGES_MENU);
  }

}
