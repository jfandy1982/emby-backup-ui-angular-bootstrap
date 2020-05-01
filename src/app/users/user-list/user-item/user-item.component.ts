import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css'],
})
export class UserItemComponent implements OnInit {
  @Input() user: User;

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  onSelected() {
    this.userService.userSelected.emit(this.user);
  }
}
