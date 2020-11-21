import { Component, OnInit } from '@angular/core';
import { AngularFirestore , AngularFirestoreCollection} from '@angular/fire/firestore';
import { Observable,Subscription  } from 'rxjs';
import { map } from 'rxjs/operators';
import {Topic} from '../../interfaces/topic'
import {Topicervice} from '../../services/topic.service'
import { WordService } from '../../services/word/word.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  slideOpts = {
    slidesPerView: 1.5,
    speed: 400
  };
  topics : any[];
  isLoading: boolean = false;
  subscribe: Subscription;


  constructor(
    private firestore: AngularFirestore,
    private wordService : WordService
  ) {}

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.getAllTopic();
  }

  doRefresh(event) {
    setTimeout(() => {
      this.getAllTopic();
      event.target.complete();
    }, 500);
  }

  getAllTopic(){    
    this.isLoading = true;
    setTimeout(()=>{
      this.isLoading = false;
      this.topics = topics;
    }, 600)
    // this.firestore.collection("topic").snapshotChanges()
    // .subscribe(data =>{
    //   this.topics = data.map(e => {
    //     let topic = Object.assign({}, {id: e.payload.doc.id}, e.payload.doc.data());
    //     return topic;
    //   })
    //   this.isLoading = false;
    // })
  }
}

const topics = [
  {
    image :'../../../assets/slides/slide-1.png',
    title: 'Writing',
    subTitle: 'Beginer',
    timeLearn: '2 week'
  },
  {
    image :'../../../assets/slides/slide-2.png',
    title: 'Listening',
    subTitle: 'Beginer',
    timeLearn: '2 week'
  },
  {
    image :'../../../assets/slides/slide-3.png',
    title: 'Test',
    subTitle: 'Beginer',
    timeLearn: '5 Test'
  },
  {
    image :'../../../assets/slides/slide-4.png',
    title: 'Writing',
    subTitle: 'Advance',
    timeLearn: '10 Test'
  }
]
