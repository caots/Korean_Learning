import { Component, Input, OnInit ,Renderer2} from '@angular/core';
import {Topic} from '../../interfaces/topic'
@Component({
  selector: 'app-topic-card',
  templateUrl: './topic-card.component.html',
  styleUrls: ['./topic-card.component.scss'],
})
export class TopicCardComponent implements OnInit {

  @Input('topic')  topic : Topic;

  constructor(
    private renderer: Renderer2,
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
  }

}
