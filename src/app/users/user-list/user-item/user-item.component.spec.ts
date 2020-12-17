import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UserItemComponent } from './user-item.component';

describe('UserItemComponent', () => {
	let component: UserItemComponent;
	let fixture: ComponentFixture<UserItemComponent>;

	beforeEach(
		waitForAsync(() => {
			TestBed.configureTestingModule({
				declarations: [UserItemComponent],
			}).compileComponents();
		}),
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(UserItemComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
