import { Component, OnInit , ViewChild, Input, ElementRef} from '@angular/core';
import { Platform } from '@ionic/angular';

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

  currentColour: string = '#333';
  brushSize: number = 10;

  constructor(public platform: Platform) { }

  ngOnInit() {    
  }

  ngAfterViewInit(){
    this.initCanvasDraw();
  }

  initCanvasDraw(){
    this.canvasElement = this.canvas.nativeElement;    
    this.canvasElement.width = this.platform.width();
    this.canvasElement.height = this.platform.height() - 290;
  }

  handleStart(ev){
    console.log(ev.touches[0]);
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
    let currentY = ev.touches[0].pageY -290;
    console.log(currentX, ' - ', currentY);
    
    
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

}
