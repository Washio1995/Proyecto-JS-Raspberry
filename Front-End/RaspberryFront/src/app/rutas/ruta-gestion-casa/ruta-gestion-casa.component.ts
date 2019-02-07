import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/api";


@Component({
  selector: 'app-ruta-gestion-casa',
  templateUrl: './ruta-gestion-casa.component.html',
  styleUrls: ['./ruta-gestion-casa.component.scss']
})
export class RutaGestionCasaComponent implements OnInit {

    private items: MenuItem[];

  constructor() { }

  ngOnInit() {

      this.items = [
          {label:'Categories'},
          {label:'Sports'},
          {label:'Football'},
          {label:'Countries'},
          {label:'Spain'},
          {label:'F.C. Barcelona'},
          {label:'Squad'},
          {label:'Lionel Messi', url: 'https://en.wikipedia.org/wiki/Lionel_Messi'}
      ];

  }


}
