import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-topic-card',
  templateUrl: './topic-card.component.html',
  styleUrls: ['./topic-card.component.scss'],
})
export class TopicCardComponent implements OnInit {

  @Input('image')  image : string;
  @Input('title')  title : string;
  @Input('subTitle')  subTitle : string;
  @Input('timeLearn')  timeLearn : string;
  @Input('isTimeLine') isTimeLine: number

  constructor() { }

  ngOnInit() {}

}
