import { ColleguePhoto } from './../model/ColleguePhoto';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-gallerie',
  templateUrl: './gallerie.component.html',
  styleUrls: ['./gallerie.component.css']
})
export class GallerieComponent implements OnInit {

  listePhoto: ColleguePhoto [];

  constructor(private dataServ: DataService) { }

  ngOnInit(): void {
    this.dataServ.addListPhotos().subscribe(
      v => this.listePhoto = v,
      err => { },
      () => { }
    );
  }

  select2(mat: string): void {
    this.dataServ.selectionner(mat).subscribe(
      () => { },
      err => { }
    );
  }

}
