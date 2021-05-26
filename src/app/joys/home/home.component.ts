import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'enjoy-camera';
  version = '0.1.3';

  constructor() { }

  ngOnInit(): void {
  }

}
