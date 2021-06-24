import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isDarkTheme: boolean = false;
  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  onDarkClick() {
    this.renderer.setAttribute(document.body, 'theme-scheme', 'custom');
    this.renderer.setAttribute(document.body, 'theme-mode', 'dark')
    this.isDarkTheme = true;
  }

  onLightClick() {
    this.renderer.setAttribute(document.body, 'theme-scheme', 'custom');
    this.renderer.setAttribute(document.body, 'theme-mode', 'light')
    this.isDarkTheme = false;
  }
}
