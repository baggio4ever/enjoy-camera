import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'enjoy-camera';
  version = '0.1.6';

  ng_version = VERSION.full;

  uikit_version = '3.6.22';

  opencv_version = '4.5.2';

  constructor() {

  }

  ngOnInit(): void {
  }

}
