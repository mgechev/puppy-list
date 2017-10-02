import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav>
      <a routerLink="/puppies">Puppies</a>
      <a routerLink="/avatars">Avatars</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {}
