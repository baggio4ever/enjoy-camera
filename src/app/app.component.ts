import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var cv: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'enjoy-camera';
  version = '0.1.1';

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
}
