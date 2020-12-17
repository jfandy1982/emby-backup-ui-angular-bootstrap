import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UserWatchedListComponent } from './user-watched-list.component';

describe('UserWatchedListComponent', () => {
	let component: UserWatchedListComponent;
	let fixture: ComponentFixture<UserWatchedListComponent>;

	beforeEach(
		waitForAsync(() => {
			TestBed.configureTestingModule({
				declarations: [UserWatchedListComponent],
			}).compileComponents();
		}),
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(UserWatchedListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
