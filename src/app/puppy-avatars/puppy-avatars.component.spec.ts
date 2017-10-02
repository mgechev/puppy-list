import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuppyAvatarsComponent } from './puppy-avatars.component';

describe('PuppyAvatarsComponent', () => {
  let component: PuppyAvatarsComponent;
  let fixture: ComponentFixture<PuppyAvatarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuppyAvatarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuppyAvatarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
