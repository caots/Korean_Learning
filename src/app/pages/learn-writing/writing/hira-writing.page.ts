import { Component, OnInit , ViewChild, Input, ElementRef} from '@angular/core';
import { Platform } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router'
import {Word} from '../../../interfaces/word'
import { Subscription } from 'rxjs'
import { WordService } from '../../../services/word/word.service'
import { async } from 'rxjs/internal/scheduler/async';

@Component({
  selector: 'app-hira-writing',
  templateUrl: './hira-writing.page.html',
  styleUrls: ['./hira-writing.page.scss'],
})
export class HiraWritingPage implements OnInit {
  
  @ViewChild('canvas') canvas: any;
  canvasElement: HTMLCanvasElement ;
  lastX: number;
  lastY: number;
  word : Word;
  idWord: number;
  isLoading: boolean = true;
  currentColour: string = '#333';
  brushSize: number = 10;
  subscribe: Subscription

  constructor(
    public platform: Platform,
      private activateRouter: ActivatedRoute,
      private router: Router,
      private wordService: WordService
      ) { }

  async ngOnInit() { 
    this.getWordIdByParams();
    this.getWordById();
  }

  getWordIdByParams(){
    this.activateRouter.params.subscribe(
      data => {
        this.idWord  = data.id;
      }
    );
  }  

  async getWordById(){
    this.isLoading = true;
    this.subscribe = this.wordService.getWordById(this.idWord).subscribe(
      data =>  {
        this.isLoading =  false;
        this.word =  data;
        setTimeout(()=>{
          this.initCanvasDraw(); 
        },500)
      },
      err => {
        this.wordService.handlerError(err)
      },
    )
  }

  initCanvasDraw(){
    this.canvasElement = this.canvas.nativeElement;
    console.log(this.canvasElement);
    this.canvasElement.width = this.platform.width();
    this.canvasElement.height = this.platform.height() - 290;
  }

  handleStart(ev){
    this.lastX = ev.touches[0].pageX ;
    this.lastY = ev.touches[0].pageY - 290;
  }

  changeColour(color, isdelete){
    if(isdelete === true){
      this.initCanvasDraw()
    }else{
      this.brushSize = 10;
    }
    this.currentColour = color;    
  }

  handleMove(ev){
    let ctx = this.canvasElement.getContext('2d');
    let currentX = ev.touches[0].pageX ;
    let currentY = ev.touches[0].pageY - 290;    
    
    ctx.beginPath();
    ctx.lineJoin = "round";
    ctx.moveTo(this.lastX, this.lastY);
    ctx.lineTo(currentX, currentY);
    ctx.closePath();
    ctx.strokeStyle = this.currentColour;
    ctx.lineWidth = this.brushSize;
    ctx.stroke();       

    this.lastX = currentX;
    this.lastY = currentY;

  }

  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
   }

}
