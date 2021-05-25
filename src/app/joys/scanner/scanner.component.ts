import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { BarcodeFormat } from '@zxing/library';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.css']
})
export class ScannerComponent implements OnInit {

  deviceCurrent: MediaDeviceInfo = null;
  availableDevices: MediaDeviceInfo[];
  deviceSelected: string;
  qrResultString = '';

  scanning = false;

  formatsEnabled: BarcodeFormat[] = [
    BarcodeFormat.CODE_128,
    BarcodeFormat.CODE_39,
    BarcodeFormat.DATA_MATRIX,
    BarcodeFormat.EAN_13,
    BarcodeFormat.QR_CODE,
  ];

  hasDevices: boolean;

  @ViewChild('input1') input1: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onCodeResult(resultString: string) {
    this.qrResultString = resultString;
    console.log('読めた！' + this.qrResultString);
  }

  onScanError(v) {
    console.log(v);
  }

  onCamerasFound(devices: MediaDeviceInfo[]): void {
    this.availableDevices = devices;
    this.hasDevices = Boolean(devices && devices.length);

  }

  onDeviceChange(device: MediaDeviceInfo) {
    const selectedStr = device?.deviceId || '';
    if (this.deviceSelected === selectedStr) { return; }
    this.deviceSelected = selectedStr;
    this.deviceCurrent = device || undefined;
  }

  scan1() {
    this.scanning = true;
    this.qrResultString = '';
    this.deviceCurrent = null;
  }

  ok() {
    this.scanning = false;
    this.input1.nativeElement.value = this.qrResultString;
  }

}
