import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/user.model';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  selectedUser: User;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.userSelected.subscribe((user: User) => {
      this.selectedUser = user;
    });
  }
}
