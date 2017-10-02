import { Puppy } from './../puppy/puppy';
import { Component, Input, TemplateRef, ContentChild } from '@angular/core';
import { NgForOfContext } from '@angular/common';

@Component({
  selector: 'puppy-list',
  template: `
    <md-list>
      <ng-template ngFor let-puppy [ngForOf]="puppies" [ngForTemplate]="puppyTemplate">
      </ng-template>
    </md-list>
  `
})
export class PuppyListComponent {
  @Input() puppies: Puppy[];
  @ContentChild(TemplateRef) puppyTemplate: TemplateRef<NgForOfContext<Puppy>>;
}
