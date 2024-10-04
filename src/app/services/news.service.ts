import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Article, NewsResp } from '../interfaces/index';
import { map } from "rxjs/operators";
const apiKey = environment.apiKey;

@Injectable({
  providedIn: 'root'
})

export class NewsService {

  constructor(private http: HttpClient) { }

  getTopNews():Observable<Article[]>{
    return this.http.get<NewsResp>(`https://newsapi.org/v2/top-headlines?country=us&category=general`, {
      params :{apiKey}
    }).pipe(map(( { articles } )=> articles));
  }

  getTopHeadlinesByCategory(category:string):Observable<Article[]>{
    return this.http.get<NewsResp>(`https://newsapi.org/v2/top-headlines?country=us&category=${category}`, {
      params :{apiKey}
    }).pipe(map(( { articles } )=> articles));
  }

}
