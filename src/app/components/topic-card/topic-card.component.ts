import { Component, Input, OnInit ,Renderer2} from '@angular/core';

@Component({
  selector: 'app-topic-card',
  templateUrl: './topic-card.component.html',
  styleUrls: ['./topic-card.component.scss'],
})
export class TopicCardComponent implements OnInit {

  @Input('title')  title : string;
  @Input('image')  image : string;
  @Input('subTitle')  subTitle : string;
  @Input('timeLearn')  timeLearn : string;

  constructor(
    private renderer: Renderer2,
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
  }


}
