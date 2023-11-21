import { Component, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';

declare const window: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularevent';

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.loadJsFile("assets/js/main.js");
  }

  public loadJsFile(url: string) {
    let node = document.createElement('script');
    node.src = url;
    node.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(node);
  }
}
