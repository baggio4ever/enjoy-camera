import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

declare var cv: any;

@Component({
  selector: 'app-opencv2',
  templateUrl: './opencv2.component.html',
  styleUrls: ['./opencv2.component.css']
})
export class Opencv2Component implements OnInit {

  @ViewChild('videoInput0') video: ElementRef;

  videoInputs = [];
  targetVideoInputId = "";

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    /*
    let iphoneConfig = {
      video: { facingMode: { exact: "environment" } },
      audio: false
    };
    let normalConfig = {
      video: {
        deviceId: this.targetVideoInputId
      },
      audio: false
    };

    let config;
    if (this.isSmartPhone()) {
      config = iphoneConfig;
    } else {
      config = normalConfig;
    }

    navigator.mediaDevices.getUserMedia(
      config
    ).then(
      (stream) => {
        this.video.nativeElement.srcObject = stream;
        //this.video.nativeElement.play();
      }
    )
    */
/*
    navigator.mediaDevices.enumerateDevices().then((devices) => {
      console.log(devices);
      this.videoInputs = [];
      devices.forEach((v) => {
        if (v.kind === "videoinput") {
          let a = v.label;
          if (a === '') {
            a = 'deviceId: ' + v.deviceId;
          }
          this.videoInputs.push({
            'label': a,
            'id': v.deviceId
          });
        }
      });
      if (this.videoInputs.length > 0) {
        this.targetVideoInputId = this.videoInputs[0].id;
      }
    });
*/
    console.log(this.iamSmartPhone());
  }

  errLog='errLog';
  streaming = false;
  onClick3() {
    console.log('clicked3');

    let iphoneConfig = {
      video: { facingMode: { exact: "environment" } },
      audio: false
    };
    let normalConfig = {
      video: {
        deviceId: this.targetVideoInputId
      },
      audio: false
    };

    let config;
    if (this.isSmartPhone()) {
      config = iphoneConfig;
    } else {
      config = normalConfig;
    }

    navigator.mediaDevices.getUserMedia(
      config
    ).then(
      (stream) => {
        console.log('getUserMedia().then()');
        this.video.nativeElement.srcObject = stream;
        //this.video.nativeElement.play();
        //this.startOpenCv();
        //console.log('width: '+this.video.nativeElement.width);
        //console.log('height: '+this.video.nativeElement.height);
        this.errLog = 'Yes!!';
      }
    ).catch(
      (err) => {
        console.log(err.name + ': '+ err.message);
        this.errLog = JSON.stringify(err);
      }
    );
/*
    let src = new cv.Mat(240, 320, cv.CV_8UC4);
    let dst = new cv.Mat(240, 320, cv.CV_8UC1);
    let cap = new cv.VideoCapture(this.video.nativeElement);

    const FPS = 30;
    let processVideo = () => {
      //console.log('yes!!!');
      if (!this.streaming) {
        if (src) {
          src.delete();
        }
        if (dst) {
          dst.delete();
        }
        return;
      }
      let begin = Date.now();
      cap.read(src);
      cv.cvtColor(src, dst, cv.COLOR_RGBA2GRAY);
      cv.flip(dst, dst, 0);
      cv.imshow('videoOutput', dst);
      let delay = 1000 / FPS - (Date.now() - begin);
      setTimeout(processVideo, delay);
    }
    setTimeout(() => {
      console.log('yes!');
      this.streaming = true;
      processVideo();
    }, 0);
    */
  }

  startOpenCv() {
    console.log('startOpenCv()');

    let src = new cv.Mat(240, 320, cv.CV_8UC4);
    let dst = new cv.Mat(240, 320, cv.CV_8UC1);
    let cap = new cv.VideoCapture(this.video.nativeElement);

    const FPS = 30;
    let processVideo = () => {
      //console.log('yes!!!');
      if (!this.streaming) {
        if (src) {
          src.delete();
        }
        if (dst) {
          dst.delete();
        }
        return;
      }
      let begin = Date.now();
      cap.read(src);
      cv.cvtColor(src, dst, cv.COLOR_RGBA2GRAY);
      cv.flip(dst, dst, 0);
      cv.imshow('videoOutput', dst);
      let delay = 1000 / FPS - (Date.now() - begin);
      setTimeout(processVideo, delay);
    }
    setTimeout(() => {
      console.log('yes!');
      this.streaming = true;
      processVideo();
    }, 0);
  }

  onDevChange(val) {
    console.log('devChanged:' + val);
    this.targetVideoInputId = val;
  }

  devInfos = [];
  onClick4() {
    navigator.mediaDevices.enumerateDevices().then((devices) => {
      console.log(devices);
      this.devInfos = [];
      devices.forEach((v) => {
        let s = JSON.stringify(v);
        this.devInfos.push(s);
      });
    });
  }

  isSmartPhone(): boolean {
    if (navigator.userAgent.match(/iPhone|Android.+Mobile/)) {
      return true;
    } else {
      return false;
    }
  }

  iamSmartPhone(): string {
    if (this.isSmartPhone()) {
      return "私はスマホです";
    } else {
      return "私はスマホではありません";
    }
  }

}
