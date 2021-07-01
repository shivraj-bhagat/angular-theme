import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(@Inject(DOCUMENT) private document: Document) {
    const head = this.document.getElementsByTagName('head')[0];
    const style = this.document.createElement('link');
    style.id = 'theme';
    style.rel = 'stylesheet';
    style.href = 'custom.css';
    head.appendChild(style);
  }
}
