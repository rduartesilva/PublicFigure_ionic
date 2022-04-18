import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-album',
  templateUrl: './album.page.html',
  styleUrls: ['./album.page.scss'],
})
export class AlbumPage implements OnInit {

  constructor(
    private router: Router
  ) { 
  }

  ngOnInit() {
  }

  VerAlbum(){
    this.router.navigate(['/highlight']);
  }

}
