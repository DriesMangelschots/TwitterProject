import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';






const API_Key= 'dcb79c56073d433e8b5fe398d538d997';
const API_URL= 'https://newsapi.org/v2';
@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http:HttpClient) {

  }
 newsfeed(url) {
    return this.http.get(`${API_URL}/${url}&apiKey=${API_Key}`);

  }
}
