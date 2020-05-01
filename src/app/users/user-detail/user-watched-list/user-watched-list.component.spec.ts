import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWatchedListComponent } from './user-watched-list.component';

describe('UserWatchedListComponent', () => {
  let component: UserWatchedListComponent;
  let fixture: ComponentFixture<UserWatchedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserWatchedListComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserWatchedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
