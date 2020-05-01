import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWatchedItemComponent } from './user-watched-item.component';

describe('UserWatchedItemComponent', () => {
  let component: UserWatchedItemComponent;
  let fixture: ComponentFixture<UserWatchedItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserWatchedItemComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserWatchedItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
