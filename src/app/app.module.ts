import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScannerComponent } from './joys/scanner/scanner.component';
import { Error404Component } from './joys/error404/error404.component';
import { OpencvComponent } from './joys/opencv/opencv.component';
import { HomeComponent } from './joys/home/home.component';

import { ZXingScannerModule} from '@zxing/ngx-scanner';
import { Opencv2Component } from './joys/opencv2/opencv2.component';

@NgModule({
  declarations: [
    AppComponent,
    ScannerComponent,
    Error404Component,
    OpencvComponent,
    HomeComponent,
    Opencv2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ZXingScannerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
