import { Injectable } from '@angular/core';
import { apiEndPointAws, apiEndPointRecognizeText } from '../constants/api.config'

import { Observable, BehaviorSubject, of } from 'rxjs'
import { catchError, tap, map } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class CommomService {

  constructor(
    private http: HttpClient,
  ) { }

  recognizeText(type: number) {
    let url = `${apiEndPointRecognizeText.api}`;
    try {
      return this.http.get(url).pipe(
        map(res => {
          return res;
        })
      )
    } catch (err) {
      return of(err)
    }
  }

  uploadImageToServer(file) {
    let url = `${apiEndPointAws.upload}`;
    const formData = new FormData();
    formData.append('file', file, 'xxx.jpg') 

    let headers = new HttpHeaders();
    headers.set('Content-Type', null);
    headers.set('Accept', "multipart/form-data");
    const options = {
      headers: headers
    }
    try {
      return this.http.post(url, formData, options).pipe(map(res => {
        return res;
      })
      )
    } catch (err) {
      return of(err)
    }
  }

  b64toBlob(b64Data, contentType) {
    contentType = contentType || '';
    var sliceSize = 512;
    var byteCharacters = atob(b64Data);
    var byteArrays = [];

    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      var slice = byteCharacters.slice(offset, offset + sliceSize);

      var byteNumbers = new Array(slice.length);
      for (var i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      var byteArray = new Uint8Array(byteNumbers);

      byteArrays.push(byteArray);
    }

    var blob = new Blob(byteArrays, { type: contentType });
    return blob;
  }



  public blobToFile = (theBlob: Blob, fileName: string): File => {
    return new File([theBlob], fileName, { type: theBlob.type, lastModified: Date.now() })
  }

}
