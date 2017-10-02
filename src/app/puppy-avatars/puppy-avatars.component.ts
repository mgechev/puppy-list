import { Component } from '@angular/core';
import { Puppies } from '../data';

@Component({
  selector: 'puppy-avatars',
  template: `
    <puppy-list [puppies]="puppies">
      <ng-template let-puppy="$implicit">
        <img mdListAvatar [src]="puppy.photo" alt="...">
      </ng-template>
    </puppy-list>
  `,
  styles: [
    `
    img {
      max-width: 100px;
    }
    `
  ]
})
export class PuppyAvatarsComponent {
  puppies = Puppies;
}
