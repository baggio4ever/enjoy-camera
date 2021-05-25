import { Component, RendererFactory2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'enjoy-camera';
  version = '0.0.5';

  getRouterLinkClasses(rla): string {
    var ret = [];

    ret.push('uk-button');
    if (rla.isActive) {
      ret.push('uk-button-primary');
    } else {
      ret.push('uk-button-default');
    }

    var ret2 = ret.join(' ');
    return ret2;
  }
}
