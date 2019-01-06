import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.sass']
})
export class PhotosComponent implements OnInit {

  constructor(private service: ServiceService ) { }

  private photosResult;

  ngOnInit() {
    this.service.getPhotos().subscribe( (results) => {
      this.photosResult = results;
      //console.log(this.photosResult);
    });
  }

}
