import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire'
import { environment } from '../environments/environment'
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { Crop } from '@ionic-native/crop/ngx';
import { Camera } from '@ionic-native/Camera/ngx';
import { File } from '@ionic-native/file/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule,
    AngularFireModule.initializeApp(environment.FIREBASE_CONFIG),
    AngularFirestoreModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Crop,
    Camera,
    File,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
