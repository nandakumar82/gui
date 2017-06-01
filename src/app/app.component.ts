import { Component, AfterViewInit } from '@angular/core';
import {Preloader, Spinner} from './shared/services';

@Component({
  selector: 'app-root',
  template: '<main><router-outlet></router-outlet></main>'
})
export class AppComponent implements AfterViewInit {
  constructor(private _spinner:Spinner){
    
  }

  public ngAfterViewInit():void {
    console.log("After view init");
    Preloader.load().then((values) => {
      this._spinner.hide();
    });
  }
}
