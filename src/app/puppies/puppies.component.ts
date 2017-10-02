import { Component } from '@angular/core';
import { Puppies } from '../data';

@Component({
  selector: 'puppies-cmp',
  template: `
    <puppy-list [puppies]="puppies">
      <ng-template let-puppy>
        <md-list-item>
          <img mdListAvatar [src]="puppy.photo" alt="...">
          <h3 mdLine> {{puppy.name}} </h3>
          <p mdLine>
            <span>Age: {{puppy.age}} </span>
            <span>Breed: {{puppy.breed}} </span>
          </p>
        </md-list-item>
      </ng-template>
    </puppy-list>
  `
})
export class PuppiesComponent {
  puppies = Puppies;
}
