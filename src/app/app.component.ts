import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'História', url: '/folder/Inbox', icon: 'person' },
    { title: 'Albuns', url: '/album', icon: 'musical-notes' },
    { title: 'Fotos', url: '/foto', icon: 'heart' },
  ];
  
  constructor() {}
}
