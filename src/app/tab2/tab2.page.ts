import { Component } from '@angular/core';
import {Topics} from '../datatypes/topics';
import {NewsService} from '../services/news.service';
import {HttpClient} from '@angular/common/http';
import {Data} from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
    data: Data = {};


    topics = Object.values(Topics);
    selectedTopic = this.topics[0];


  constructor(private news: NewsService) {
      this.loadNewsArticles();
  }
loadNewsArticles() {
   this.news.newsfeed('/top-headlines?country=us&category=business').subscribe( data => {
    this.data = data;
     console.log(this.data,'api key werkt');
   })

  }




}
