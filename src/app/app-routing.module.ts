import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Error404Component } from './joys/error404/error404.component';
import { HomeComponent } from './joys/home/home.component';
import { OpencvComponent } from './joys/opencv/opencv.component';
import { Opencv2Component } from './joys/opencv2/opencv2.component';
import { ScannerComponent } from './joys/scanner/scanner.component';

const routes: Routes = [
  { path: '', redirectTo: 'scanner', pathMatch: 'full' },
  { path: 'scanner', component: ScannerComponent },
  { path: 'opencv', component: OpencvComponent },
  { path: 'opencv2', component: Opencv2Component },
  { path: 'version', component: HomeComponent },
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
