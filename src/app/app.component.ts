import { Component } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'app-root',
  styles: [
    `
      .app-container {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
      }
      .app-is-mobile .app-toolbar {
        position: fixed;
        z-index: 2;
      }
      .app-sidenav-container {
        flex: 1;
      }
      .app-is-mobile .app-sidenav-container {
        flex: 1 0 auto;
      }
      mat-sidenav {
        width: 200px;
      }
      .image-cropper {
        width: 40px;
        height: 40px;
        position: relative;
        overflow: hidden;
        border-radius: 50%;
        margin-top: -8px;
      }
    `,
  ],
  template: `
    <div class="app-container">
      <mat-toolbar color="primary" fxLayoutGap="8px" class="app-toolbar" [class.app-is-mobile]="media.isActive('xs')">
        <button mat-icon-button (click)="sidenav.toggle()">
          <mat-icon>menu</mat-icon>
        </button>
        <a mat-icon-button routerLink="/home">
          <span class="mat-h2">Acorde</span>
        </a>
        <span class="flex-spacer"></span>
        <button mat-mini-fab routerLink="/user/profile" matTooltip="Perfil" aria-label="User Profile">
          <mat-icon>account_circle</mat-icon>
        </button>
        <button mat-mini-fab routerLink="/user/logout" matTooltip="Logout" aria-label="Logout">
          <mat-icon>lock_open</mat-icon>
        </button>
      </mat-toolbar>
      <mat-sidenav-container class="app-sidenav-container">
        <mat-sidenav #sidenav [mode]="media.isActive('xs') ? 'over' : 'side'" [fixedInViewport]="media.isActive('xs')" _
          fixedTopGap="56">
          <app-navigation-menu></app-navigation-menu>
        </mat-sidenav>
        <mat-sidenav-content>
          <router-outlet></router-outlet>
        </mat-sidenav-content>
      </mat-sidenav-container>
    </div>
  `
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
