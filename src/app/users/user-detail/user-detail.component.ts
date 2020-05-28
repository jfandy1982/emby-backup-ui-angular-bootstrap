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

	getProgressBarWidthAll() {
		return { width: this.user.all.ratio + '%' };
	}

	getProgressBarWidthFilm() {
		return { width: this.user.film.ratio + '%' };
	}

	getProgressBarWidthSeries() {
		return { width: this.user.series.ratio + '%' };
	}

	getProgressBarWidthSeasons() {
		return { width: this.user.seasons.ratio + '%' };
	}

	getProgressBarWidthEpisodes() {
		return { width: this.user.episodes.ratio + '%' };
	}

	getProgressBarWidthMusicFilm() {
		return { width: this.user.musicFilm.ratio + '%' };
	}
}
