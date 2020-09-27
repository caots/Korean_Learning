import { Injectable } from '@angular/core';
import {apiEndPoints} from '../../constants/api.config'

import {Observable, BehaviorSubject, of} from 'rxjs'
import { catchError, tap, map } from 'rxjs/operators';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'

import {Word} from '../../interfaces/word'

@Injectable({
  providedIn: 'root'
})
export class WordService {

  constructor(
    private http : HttpClient
  ) { }

  //get all word by type
  getWordByType(type: number) {
    let url = `${apiEndPoints.word}?type=${type}` ;
    try{
      return this.http.get(url).pipe(
        map(res => {
          return res;
        })
      )
    }catch(err){
      return of(err)
    }
  }

  // get word by id
  getWordById(id: number){
    let url = `${apiEndPoints.word}/${id}`;   
    try{
      return this.http.get(url).pipe(
        map(res => {
          return res;
        })
      )
    }catch(err){
      return of(err)
    } 
  }

  // Handler Error
  handlerError(err){
    if(err.error instanceof Error){
      console.log(`Client-error: ${err.error.message}`);
    }else{
      console.log(`Server-side-error: ${err.status} - ${err.error}`);
    }
  }

}
