import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {Topic} from '../../interfaces/topic'

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
  topics : Topic[];
  isLoading: boolean = false;

  constructor(
    private firestore: AngularFirestore
  ) { }

  ngOnInit() {
    this.getAllTopic();
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  getAllTopic(){
    this.isLoading = true;
    this.firestore.collection('topic')
    .snapshotChanges()
    .subscribe(data =>  {
      this.isLoading = false;
      console.log(data);
    })
  }

}
