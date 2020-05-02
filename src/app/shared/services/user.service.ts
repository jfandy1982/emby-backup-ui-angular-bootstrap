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
      new Date(),
      new StatisticCounter(10, 1),
      new StatisticCounter(20, 2),
      new StatisticCounter(30, 3),
      new StatisticCounter(40, 4),
      new StatisticCounter(50, 5),
      new StatisticCounter(60, 6),
      [new WatchedItem('id-1', 'media-id-1', false, false, false)]
    ),
    new User(
      'id-2',
      'server-1',
      'Berta',
      'Emby Server 1',
      new Date(),
      new StatisticCounter(6, 6),
      new StatisticCounter(5, 5),
      new StatisticCounter(4, 4),
      new StatisticCounter(3, 3),
      new StatisticCounter(2, 2),
      new StatisticCounter(1, 1),
      [
        new WatchedItem('id-2', 'media-id-1', false, false, false),
        new WatchedItem('id-2', 'media-id-2', false, true, false),
      ]
    ),
    new User(
      'id-3',
      'server-1',
      'Charly',
      'Emby Server 1',
      new Date(),
      new StatisticCounter(0, 0),
      new StatisticCounter(0, 0),
      new StatisticCounter(0, 0),
      new StatisticCounter(0, 0),
      new StatisticCounter(0, 0),
      new StatisticCounter(0, 0),
      []
    ),
  ];

  getUsers() {
    return this.users.slice();
  }
}
