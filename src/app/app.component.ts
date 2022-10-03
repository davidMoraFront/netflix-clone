import { MoviesService } from './services/movies.service';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';

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
  subs: Subscription[] = [];
  backgroundUrl: string = '';
  sticky = false;

  @ViewChild('stickHeader')
  header!: ElementRef;
  
  constructor(private movies: MoviesService) {

  }

  ngOnInit() {
    this.subs.push(this.movies.getTrending().subscribe(data => {
      this.trending = data;
      this.backgroundUrl = 'https://image.tmdb.org/t/p/original' + data.results[0].backdrop_path;
    }));
    this.subs.push(this.movies.getTopRated().subscribe(data => this.topRated = data));
    this.subs.push(this.movies.getNowPlaying().subscribe(data => this.nowPlaying = data));
    this.subs.push(this.movies.getOriginals().subscribe(data => this.originals = data));
    this.subs.push(this.movies.getPopular().subscribe(data => this.popular = data));
  }

  ngOnDestroy(): void {
    this.subs.map(sub => sub.unsubscribe());
  }

  @HostListener('window:scroll', ['$event'])
  // tslint:disable-next-line:typedef
  handleScroll() {
    const windowScroll = window.pageYOffset;

    if (windowScroll >= this.header.nativeElement.offsetHeight) {
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }
  
}
