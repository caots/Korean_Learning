import { Component, OnInit, ViewChild, Input, ElementRef } from '@angular/core';
import { Platform, } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router'
import { Word } from '../../../interfaces/word'
import { Subscription } from 'rxjs'
import { WordService } from '../../../services/word/word.service'
import { CommomService } from '../../../services/commom.service'
import { apiEndPointAws } from '../../../constants/api.config'
import { createWorker } from 'tesseract.js'

@Component({
  selector: 'app-hira-writing',
  templateUrl: './hira-writing.page.html',
  styleUrls: ['./hira-writing.page.scss'],
})


export class HiraWritingPage implements OnInit {

  @ViewChild('canvas') canvas: any;
  canvasElement: HTMLCanvasElement;
  lastX: number;
  lastY: number;
  word: Word;
  idWord: number;
  isLoading: boolean = true;
  currentColour: string = '#fff';
  brushSize: number = 3;
  subscribe: Subscription;
  screen: any;
  fileImageWord: string;
  worker: Tesseract.Worker;
  workerReady: boolean = false;
  textOcr: string;
  image = '../../../../assets/images/test2.png'

  constructor(
    public platform: Platform,
    private activateRouter: ActivatedRoute,
    private router: Router,
    private commomService: CommomService,
    private wordService: WordService,
  ) { }

  async ngOnInit() {
    this.getWordIdByParams();
    this.getWordById();
    this.loadWorker();
  }

  getWordIdByParams() {
    this.activateRouter.params.subscribe(
      data => {
        this.idWord = data.id;
      }
    );
  }

  async getWordById() {
    this.isLoading = true;
    this.subscribe = this.wordService.getWordById(this.idWord).subscribe(
      data => {
        this.isLoading = false;
        this.word = data;
      },
      err => {
        this.wordService.handlerError(err)
      },
    )
  }

  ngAfterViewInit(): void {
    this.initCanvasDraw();
  }

  submitImage() {
  }

  initCanvasDraw() {
    this.canvasElement = this.canvas.nativeElement;
    this.canvasElement.width = this.platform.width();
    this.canvasElement.height = this.platform.height() - 290;
  }

  handleStart(ev) {
    this.lastX = ev.touches[0].pageX;
    this.lastY = ev.touches[0].pageY - 290;
  }

  changeColour(color, isdelete) {
    if (isdelete === true) {
      this.initCanvasDraw()
    } else {
      this.brushSize = 10;
    }
    this.currentColour = color;
  }

  handleMove(ev) {
    let ctx = this.canvasElement.getContext('2d');
    let currentX = ev.touches[0].pageX;
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

  saveCanvasImage() {
    let dataUrl = this.canvasElement.toDataURL();
    let ctx = this.canvasElement.getContext('2d');
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); // Clears the canvas

    let data = dataUrl.split(',')[1];
    let blob = this.commomService.b64toBlob(data, 'image/png');

    let imageWord = new File([blob], 'image-word.png', { type: blob.type, lastModified: Date.now() });
    this.commomService.uploadImageToServer(imageWord).subscribe(data => {
      this.fileImageWord = apiEndPointAws.images + data.filename;
      this.recognizeImage(this.fileImageWord);
    }, err => {
      console.log(err);
    })
  }

  async loadWorker(){
    this.worker = createWorker({
      logger: progress => {
        console.log(progress);
      }
    })
    await this.worker.load();
    await this.worker.loadLanguage('eng');
    await this.worker.initialize('eng');
    this.workerReady = true;
  }

  async recognizeImage(url) {
    console.log(url);
    const result: any = await this.worker.recognize(url);
    console.log(result);
    this.textOcr = result.text;
  }

  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }

}
