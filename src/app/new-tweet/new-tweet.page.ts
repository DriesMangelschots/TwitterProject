import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-tweet',
  templateUrl: './new-tweet.page.html',
  styleUrls: ['./new-tweet.page.scss'],
})
export class NewTweetPage implements OnInit {

  @Output() newZeet = new EventEmitter<Omit<IZeet, 'id'>>();
  @Input() user!: User;
  zeetMessage = '';
  constructor() { }

  get isZeetEmpty() {
    return this.zeetMessage.trim().length === 0;
  }
  ngOnInit() {
  }


  onSubmit($event: Event) {
    $event.preventDefault();
    if (this.isZeetEmpty) {
      return;
    }
    this.newZeet.emit({
      content: this.zeetMessage,
      likedBy: [],
      commentedBy: [],
      createdAt: formatISO(new Date()),
      by: {
        id: this.user.uid,
        name: this.user.displayName || this.user.email || '',
        username: '',
        profileURL: this.user.photoURL || '',
      },
    });
    this.zeetMessage = '';
  }
}
