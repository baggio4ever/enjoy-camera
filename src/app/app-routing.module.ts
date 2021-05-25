import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Error404Component } from './joys/error404/error404.component';
import { HomeComponent } from './joys/home/home.component';
import { OpencvComponent } from './joys/opencv/opencv.component';
import { ScannerComponent } from './joys/scanner/scanner.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'scanner', component: ScannerComponent },
  { path: 'opencv', component: OpencvComponent },
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
