import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-menu',
  styles: [
    `.active-link {
      font-weight: bold;
      border-left: 3px solid #3f51b5;
    }`,
  ],
  template: `
  <mat-nav-list>
    <a mat-list-item routerLinkActive="active-link" routerLink="students">
      <mat-icon mat-list-icon>people</mat-icon>
      <h4 mat-line>Alunos</h4>
    </a>
  </mat-nav-list>
`
})
export class NavigationMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
