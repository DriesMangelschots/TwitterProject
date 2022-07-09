import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ITweet, Tweet } from '../datatypes/tweet';

@Injectable({
  providedIn: 'root'
})
export class TweetService {

   tweets: Tweet[] = [];

   id = 0;
  constructor(private alertCtrl: AlertController) {
    this.alertCtrl = alertCtrl;
   }

   // Modal for new tweet

   async modalTweet(): Promise<void> {
     const modal = await this.alertCtrl.create({
       header: 'New Tweet',
       buttons : [
         {
           text: 'OK',
           handler: (data) => {
             this.newTweet(data.name);
           }
         }
       ],
       inputs: [
         {
           name: 'name',
           type: 'text',
           placeholder: 'Description'
         }
       ]
     });
     await modal.present();
   }
  newTweet(content: string, id: number): void {
    this.tweets.push({
      content,
      id: this.id,
    });
    this.id++;
  }

  updateTweet(updateTweet: ITweet): void {
    const tweet = this.tweets.find(t => t.id === updateTweet.id);
    if (tweet === undefined) {
      console.error('Trying to update a nonexistent task.');
      return;
    }
}
}