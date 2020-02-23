import { Component } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  _displayAccountIcons = false
  constructor(
    public media: MediaObserver
  ) { }

  title = 'acorde-app';

  displayAccountIcons() {
    return this._displayAccountIcons
  }

}
