import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuppyListComponent } from './puppy-list.component';

describe('PuppyListComponent', () => {
  let component: PuppyListComponent;
  let fixture: ComponentFixture<PuppyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuppyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuppyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
