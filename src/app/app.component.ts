import { MoviesService } from './services/movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'netflix-clone';
  trending: any;
  topRated: any;
  nowPlaying: any;
  originals: any;
  popular: any;
  
  constructor(private movies: MoviesService) {

  }

  ngOnInit() {
    this.movies.getTrending().subscribe(data => this.trending = data);
    this.movies.getTopRated().subscribe(data => this.topRated = data);
    this.movies.getNowPlaying().subscribe(data => this.nowPlaying = data);
    this.movies.getOriginals().subscribe(data => this.originals = data);
    this.movies.getPopular().subscribe(data => this.popular = data);
  }
}
