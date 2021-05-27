import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

declare var cv: any;

@Component({
  selector: 'app-opencv',
  templateUrl: './opencv.component.html',
  styleUrls: ['./opencv.component.css']
})
export class OpencvComponent implements OnInit, AfterViewInit {

  @ViewChild('imageSrc0') imageSrc: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

  }

  onChange(ev) {
    console.log('changed!');
    //let imgElement = document.getElementById("imageSrc")
    this.imageSrc.nativeElement.src = URL.createObjectURL(ev.target.files[0]);
  }

  /*
  // 複写
  onClick1() {
    console.log('clicked1!');

    let mat = cv.imread(this.imageSrc.nativeElement);
    cv.imshow("outputCanvas", mat);
    mat.delete();
  }
  */

  // モノクロ化
  onClick2() {
    console.log('clicked2');

    let src = cv.imread(this.imageSrc.nativeElement);
    let dst = new cv.Mat();
    cv.cvtColor(src, dst, cv.COLOR_RGBA2GRAY);
    cv.imshow('monoCanvas', dst);
    src.delete();
    dst.delete();
  }

  // 2値化
  onClick3() {
    console.log('clicked3');

    let src = cv.imread(this.imageSrc.nativeElement);
    let dst = new cv.Mat();
    let low = new cv.Mat(src.rows,src.cols,src.type(),[0,0,0,0]);
    let high = new cv.Mat(src.rows,src.cols,src.type(),[128,128,128,255]);
    cv.inRange(src,low,high, dst);
    cv.imshow('binCanvas', dst);
    src.delete();
    dst.delete();
    low.delete();
    high.delete();
  }
}
