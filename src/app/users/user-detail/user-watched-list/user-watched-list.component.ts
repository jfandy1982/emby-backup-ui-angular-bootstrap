import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';

@Component({
	selector: 'app-user-watched-list',
	templateUrl: './user-watched-list.component.html',
	styleUrls: ['./user-watched-list.component.css'],
})
export class UserWatchedListComponent implements OnInit {
	@Input() user: User;

	constructor() {}

	ngOnInit(): void {}
}
