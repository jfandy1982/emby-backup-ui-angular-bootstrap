import { Component, OnInit, Input } from '@angular/core';
import { WatchedItem } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-user-watched-item',
  templateUrl: './user-watched-item.component.html',
  styleUrls: ['./user-watched-item.component.css'],
})
export class UserWatchedItemComponent implements OnInit {
  @Input() watchedItem: WatchedItem;

  constructor() {}

  ngOnInit(): void {}
}
