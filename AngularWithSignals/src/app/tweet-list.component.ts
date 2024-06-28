import { Component, Input } from '@angular/core';
import { Tweet } from '../user.model';

@Component({
  selector: 'app-tweet-list',
  templateUrl: './tweet-list.component.html',
  styleUrls: ['./tweet-list.component.css']
})
export class TweetListComponent {
  @Input() tweets: Tweet[] = [];
}