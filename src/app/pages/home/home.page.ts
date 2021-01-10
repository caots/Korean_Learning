import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular'
import { Camera, CameraOptions } from '@ionic-native/Camera/ngx';
import { Crop } from '@ionic-native/crop/ngx';
import { File } from '@ionic-native/file/ngx';
import { createWorker } from 'tesseract.js';
import { CommomService } from '../../services/commom.service'
import { apiEndPointAws } from '../../constants/api.config'
import './../../../assets/images/abc.png'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  croppedImagePath = "";
  defaultImage = "assets/placeholder.png";
  isLoading = false;
  imagePickerOptions = {
    maximumImagesCount: 1,
    quality: 50
  };
  worker: Tesseract.Worker;
  workerReady: boolean = false;
  result: any = '';
  fileImageWord: string;
  progress : number = 0;
  constructor(
    private camera: Camera,
    private crop: Crop,
    private file: File,
    private commomService: CommomService,
    public actionSheetController: ActionSheetController,
  ) { }

  async ngOnInit() {
    this.loadWorker();
  }

  pickImage(sourceType) {
    const options: CameraOptions = {
      quality: 100,
      sourceType: sourceType,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      this.cropImage(imageData)
    }, (err) => {
      // Handle error
    });
  }

  async selectImage() {
    const actionSheet = await this.actionSheetController.create({
      header: "Select Image source",
      buttons: [
        {
          text: 'Load from Library',
          handler: () => {
            this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        },
        {
          text: 'Use Camera',
          handler: () => {
            this.pickImage(this.camera.PictureSourceType.CAMERA);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    await actionSheet.present();
  }

  cropImage(fileUrl) {
    this.crop.crop(fileUrl, { quality: 50 })
      .then(
        newPath => {
          this.showCroppedImage(newPath.split('?')[0])
        },
        error => {
          alert('Error cropping image' + error);
        }
      );
  }

  async loadWorker() {
    this.worker = createWorker({
      logger: progress => {
        this.progress = Math.ceil(progress.progress * 100);
        console.log(progress.progress);
      }
    })
    await this.worker.load();
    await this.worker.loadLanguage('eng');
    await this.worker.initialize('eng');
    this.workerReady = true;
  }

  showCroppedImage(ImagePath) {
    this.isLoading = true;
    this.fileImageWord = null;
    this.result = null;
    var copyPath = ImagePath;
    var splitPath = copyPath.split('/');
    var imageName = splitPath[splitPath.length - 1];
    var filePath = ImagePath.split(imageName)[0];

    this.file.readAsDataURL(filePath, imageName).then(base64 => {
      this.croppedImagePath = base64;
      this.isLoading = false;
      const file = this.dataURIToBlob(base64);
      this.commomService.uploadImageToServer(file).subscribe(data => {
        this.fileImageWord = apiEndPointAws.images + data.filename;
      }, err => {
        console.log(err);
      })

    }, error => {
      alert('Error in showing image' + error);
      this.isLoading = false;
    });
  }

  dataURIToBlob(dataURI: string) {
    const splitDataURI = dataURI.split(',')
    const byteString = splitDataURI[0].indexOf('base64') >= 0 ? atob(splitDataURI[1]) : decodeURI(splitDataURI[1])
    const mimeString = splitDataURI[0].split(':')[1].split(';')[0]

    const ia = new Uint8Array(byteString.length)
    for (let i = 0; i < byteString.length; i++)
      ia[i] = byteString.charCodeAt(i)

    return new Blob([ia], { type: mimeString })
  }

  async recognizeImage() {
    this.progress = 0;
    console.log(this.fileImageWord);
    const data = await this.worker.recognize(this.fileImageWord);
    await data.data.lines.map(line => {
      this.result += `<p>${line.text}</p>`;
    })
    console.log(data.data);
    await this.worker.terminate();
  }

}
