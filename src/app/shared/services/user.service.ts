import { Injectable, EventEmitter } from '@angular/core';
import { User, StatisticCounter, WatchedItem } from '../models/user.model';

@Injectable()
export class UserService {
	userSelected = new EventEmitter<User>();

	private users: User[] = [
		new User(
			'id-1',
			'server-1',
			'Anton',
			'Emby Server 1',
			new Date(2020, 1, 1, 13, 14, 15, 99),
			new StatisticCounter(10, 1),
			new StatisticCounter(20, 2),
			new StatisticCounter(30, 3),
			new StatisticCounter(40, 4),
			new StatisticCounter(50, 5),
			new StatisticCounter(60, 6),
			[new WatchedItem('id-1', 'media-id-1', false, false, false)],
		),
		new User(
			'id-2',
			'server-1',
			'Berta',
			'Emby Server 1',
			new Date(2019, 9, 14, 21, 35, 59, 99),
			new StatisticCounter(6, 6),
			new StatisticCounter(5, 5),
			new StatisticCounter(4, 4),
			new StatisticCounter(3, 3),
			new StatisticCounter(2, 2),
			new StatisticCounter(1, 1),
			[
				new WatchedItem('id-2', 'media-id-1', false, false, false),
				new WatchedItem('id-2', 'media-id-2', false, true, false),
			],
		),
		new User(
			'id-3',
			'server-1',
			'Charly',
			'Emby Server 1',
			new Date(1970, 0, 1, 0, 0, 0, 0),
			new StatisticCounter(0, 0),
			new StatisticCounter(0, 0),
			new StatisticCounter(0, 0),
			new StatisticCounter(0, 0),
			new StatisticCounter(0, 0),
			new StatisticCounter(0, 0),
			[],
		),
		new User(
			'id-4',
			'server-1',
			'David',
			'Emby Server 1',
			new Date(),
			new StatisticCounter(531, 42),
			new StatisticCounter(302, 10),
			new StatisticCounter(350, 25),
			new StatisticCounter(377, 100),
			new StatisticCounter(2084, 342),
			new StatisticCounter(5, 2),
			[
				new WatchedItem('id-4', 'media-id-1', false, false, false),
				new WatchedItem('id-4', 'media-id-2', false, true, false),
				new WatchedItem('id-4', 'media-id-3', false, false, false),
				new WatchedItem('id-4', 'media-id-4', false, true, false),
				new WatchedItem('id-4', 'media-id-5', false, false, false),
				new WatchedItem('id-4', 'media-id-6', false, true, false),
				new WatchedItem('id-4', 'media-id-7', false, false, false),
				new WatchedItem('id-4', 'media-id-8', false, true, false),
				new WatchedItem('id-4', 'media-id-9', false, false, false),
				new WatchedItem('id-4', 'media-id-10', false, true, false),
				new WatchedItem('id-4', 'media-id-11', false, false, false),
				new WatchedItem('id-4', 'media-id-12', false, true, false),
				new WatchedItem('id-4', 'media-id-13', false, false, false),
				new WatchedItem('id-4', 'media-id-14', false, true, false),
				new WatchedItem('id-4', 'media-id-15', false, false, false),
				new WatchedItem('id-4', 'media-id-16', false, true, false),
				new WatchedItem('id-4', 'media-id-17', false, false, false),
				new WatchedItem('id-4', 'media-id-18', false, true, false),
			],
		),
	];

	getUsers() {
		return this.users.slice();
	}
}
