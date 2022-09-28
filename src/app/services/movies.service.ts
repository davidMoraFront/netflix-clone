import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

const enum endpoint {
  latest = '/movie/latest',
  now_playing = '/movie/now_playing',
  popular = '/movie/popular',
  top_rated = '/movie/top_rated',
  upcoming = '/movie/upcoming',
  trending = '/trending/all/week',
  originals = '/discover/tv'
}

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private url = 'https://api.themoviedb.org/3';
  private key = environment.api_key;

  constructor(private http: HttpClient) { }

  getLatest(): Observable<any> {
    return this.http.get<any>(`${this.url}${endpoint.latest}`, {
      params: {
        api_key: this.key
      }
    });
  }

  getNowPlaying(): Observable<any> {
    return this.http.get<any>(`${this.url}${endpoint.now_playing}`, {
      params: {
        api_key: this.key
      }
    });
  }

  getPopular(): Observable<any> {
    return this.http.get<any>(`${this.url}${endpoint.popular}`, {
      params: {
        api_key: this.key
      }
    });
  }

  getTopRated(): Observable<any> {
    return this.http.get<any>(`${this.url}${endpoint.top_rated}`, {
      params: {
        api_key: this.key
      }
    });
  }

  getUpcoming(): Observable<any> {
    return this.http.get<any>(`${this.url}${endpoint.upcoming}`, {
      params: {
        api_key: this.key
      }
    });
  }

  getTrending(): Observable<any> {
    return this.http.get<any>(`${this.url}${endpoint.trending}`, {
      params: {
        api_key: this.key
      }
    });
  }

  getOriginals(): Observable<any> {
    return this.http.get<any>(`${this.url}${endpoint.originals}`, {
      params: {
        api_key: this.key
      }
    });
  }
}
