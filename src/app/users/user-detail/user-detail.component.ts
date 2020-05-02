import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {
  @Input() user: User;

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  getProgressBarWidth(): string {
    return this.user.all.ratio + ' %';
  }
}
