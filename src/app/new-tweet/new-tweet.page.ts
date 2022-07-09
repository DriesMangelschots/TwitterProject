import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'firebase/auth';
import { ITweet } from '../datatypes/tweet';


@Component({
  selector: 'app-new-tweet',
  templateUrl: './new-tweet.page.html',
  styleUrls: ['./new-tweet.page.scss'],
})
export class NewTweetPage implements OnInit {

  @Output() newTweet = new EventEmitter<Omit<ITweet, 'id'>>();
  @Input() user!: User;
  tweetMessage = '';
  constructor() { }

  get isTweetEmpty() {
    return this.tweetMessage.trim().length === 0;
  }
  ngOnInit() {
  }


  onSubmit($event: Event) {
    $event.preventDefault();
    if (this.isTweetEmpty) {
      return;
    }
    this.newTweet.emit({
      content: this.tweetMessage,
      likedBy: [],
      commentedBy: [],
      by: {
        id: this.user.uid,
        name: this.user.displayName || this.user.email || '',
        username: '',
        profileURL: this.user.photoURL || '',
      },
    });
    this.tweetMessage = '';
  }
}


