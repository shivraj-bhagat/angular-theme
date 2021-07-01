import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  scheme: string[];
  constructor(private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    if (localStorage.getItem('theme')) {
      this.onthemeSelect(localStorage.getItem('theme'));
    }
  }

  onthemeSelect(theme: string) {
    this.scheme = theme.split('-');
    this.loadCss(this.scheme[0]);
    this.renderer.setAttribute(document.body, 'theme-scheme', this.scheme[0]);
    this.renderer.setAttribute(document.body, 'theme-mode', this.scheme[1])
    localStorage.setItem('theme', theme);
  }

  loadCss(cssName: string) {
    let themeLink = this.document.getElementById(
      'theme'
    ) as HTMLLinkElement;
    themeLink.href = `${cssName}.css`;
  }
}
