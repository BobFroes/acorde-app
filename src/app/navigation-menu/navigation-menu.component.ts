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
    <h3 matSubheader>ÁREA DO ALUNO</h3>
    <a mat-list-item routerLinkActive="active-link" routerLink="/students/alunos">Alunos</a>
  </mat-nav-list>
`
})
export class NavigationMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
