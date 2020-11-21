import { Injectable } from '@angular/core';

import {Observable, BehaviorSubject, of} from 'rxjs'
import { catchError, tap, map } from 'rxjs/operators';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { AngularFirestore , AngularFirestoreCollection} from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class Topicervice {

  constructor(
    private http : HttpClient,
    private firestore: AngularFirestore

  ) { }

  getAllTopic(){    
    
  }

  // get word by id
  getTopicById(id: number){
    
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
