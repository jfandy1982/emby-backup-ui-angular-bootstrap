import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { UsersComponent } from './users/users.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserItemComponent } from './users/user-list/user-item/user-item.component';
import { UserWatchedListComponent } from './users/user-detail/user-watched-list/user-watched-list.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { UserService } from './shared/services/user.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		UsersComponent,
		UserListComponent,
		UserItemComponent,
		UserWatchedListComponent,
		UserDetailComponent,
		PageNotFoundComponent,
		HomeComponent,
	],
	imports: [BrowserModule, FormsModule, AppRoutingModule],
	providers: [UserService],
	bootstrap: [AppComponent],
})
export class AppModule {}
