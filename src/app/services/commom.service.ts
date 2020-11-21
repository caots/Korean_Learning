import { Injectable } from '@angular/core';
import { apiEndPointAws } from '../constants/api.config'

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

  uploadImageToServer(file) {
    let url = `${apiEndPointAws.upload}`;
    let formData: FormData = new FormData();
    formData.append('file', file, file.name);

    let headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
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

  blobToFile(theBlob, fileName) {
    theBlob.lastModifiedDate = new Date();
    theBlob.name = fileName;
    return theBlob;
  }


}
