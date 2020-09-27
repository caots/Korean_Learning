import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { Subscription } from 'rxjs'
import {Word} from '../../../interfaces/word'
import { WordService } from '../../../services/word/word.service'

@Component({
  selector: 'app-list-word',
  templateUrl: './list-word.page.html',
  styleUrls: ['./list-word.page.scss'],
})
export class ListWordPage implements OnInit {

  typeWord : number;
  listWord : Word [];
  isLoading: boolean = true;
  subscribe: Subscription;


  constructor(
    private activateRouter: ActivatedRoute,
    private router: Router,
    private wordService: WordService
  ) { }

  ngOnInit() {
    this.getTypeWord();
    this.getAllWordByType();    
  }

  getTypeWord(){
    this.activateRouter.queryParams.subscribe(
      data => {
         this.typeWord  = data.type;
      }
    );
  }

  getAllWordByType(){
    this.isLoading = true;
    this.subscribe = this.wordService.getWordByType(this.typeWord).subscribe(
      data => {
        this.isLoading = false;
        this.listWord = data        
      },
      err => {
        this.wordService.handlerError(err)
      }
    )
  }

  ngOnDestroy(): void {
   this.subscribe.unsubscribe();
  }

}
