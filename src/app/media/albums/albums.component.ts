import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.sass']
})
export class AlbumsComponent implements OnInit {

  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.service.getAlbums().subscribe ( (results) => {
      console.log(results);
    });
  }

}
