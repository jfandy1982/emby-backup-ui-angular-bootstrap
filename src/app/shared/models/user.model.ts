export class StatisticCounter {
  public cntAll: number;
  public cntWatched: number;

  constructor(cntAll: number, cntWatched: number) {
    this.cntAll = cntAll;
    this.cntWatched = cntWatched;
  }
}

export class WatchedItem {
  public userId: string;
  public mediaItemId: string;

  // good/warning conditions
  public backupMissesWatchedState: boolean;

  // errorous conditions
  public serverMissesWatchedState: boolean;

  // warning conditions
  public serverDiffLastWatchDate: boolean;

  constructor(
    userId: string,
    mediaItemId: string,
    backupMissesWatchedState: boolean,
    serverMissesWatchedState: boolean,
    serverDiffLastWatchDate: boolean
  ) {
    this.userId = userId;
    this.mediaItemId = mediaItemId;
    this.backupMissesWatchedState = backupMissesWatchedState;
    this.serverMissesWatchedState = serverMissesWatchedState;
    this.serverDiffLastWatchDate = serverDiffLastWatchDate;
  }
}

export class User {
  public userId: string;
  public serverId: string;
  public name: string;
  public serverName: string;
  public lastLogonDate: Date;
  public all: StatisticCounter;
  public film: StatisticCounter;
  public series: StatisticCounter;
  public seasons: StatisticCounter;
  public episodes: StatisticCounter;
  public musicFilm: StatisticCounter;
  public watchedItems: WatchedItem[];

  constructor(
    userId: string,
    serverId: string,
    name: string,
    serverName: string,
    lastLogonDate: Date,
    all: StatisticCounter,
    film: StatisticCounter,
    series: StatisticCounter,
    seasons: StatisticCounter,
    episodes: StatisticCounter,
    musicFilm: StatisticCounter,
    watchedItems: WatchedItem[]
  ) {
    this.userId = userId;
    this.serverId = serverId;
    this.name = name;
    this.serverName = serverName;
    this.lastLogonDate = lastLogonDate;
    this.all = all;
    this.film = film;
    this.series = series;
    this.seasons = seasons;
    this.episodes = episodes;
    this.musicFilm = musicFilm;
    this.watchedItems = watchedItems;
  }
}
