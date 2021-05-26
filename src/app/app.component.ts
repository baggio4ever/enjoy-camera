import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

declare var cv: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'enjoy-camera';
  version = '0.1.3';

  links = [
    {
      text: '初期画面',
      url: 'home'
    },
    {
      text: 'ngx-scanner実験',
      url: 'scanner'
    },
    {
      text: 'OpenCV.js実験',
      url: 'opencv'
    }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");

    const script = document.createElement('script');
    script.async = true;
    script.src = './assets/opencv/opencv452.js';
    script.onload = () => {
      console.log("loaded!");

      if (cv.getBuildInformation) {
        console.log(cv.getBuildInformation());
      }
    }

    const div = document.getElementById('script');
    div.insertAdjacentElement('afterend', script);
  }

  getRouterLinkClasses(rla): string {
    var ret = [];

    ret.push('uk-button');
    ret.push('uk-button-small');
    if (rla.isActive) {
      ret.push('uk-button-primary');
    } else {
      ret.push('uk-button-default');
    }

    var ret2 = ret.join(' ');
    return ret2;
  }

  result = '';
  onTest(): void {
    console.log('current:' + this.router.url);
    this.result = this.router.url;
  }

  isCurrentUrl(url): boolean {
    if ('/'+this.router.url === url) {
      console.log('yes! ' + this.router.url);
      return true;
    }
    console.log('no! ' + this.router.url + ' ' + url);
    return false;
  }

  onChange(url) {
    console.log('onChange: '+url);
    this.router.navigate([url]);
  }
}
