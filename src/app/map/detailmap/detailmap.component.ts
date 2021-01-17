import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';
import { SharingService } from 'src/app/services/sharing.service';
import { Etablissement } from '../map.component';

@Component({
  selector: 'app-detailmap',
  templateUrl: './detailmap.component.html',
  styleUrls: ['./detailmap.component.css']
})
export class DetailmapComponent implements OnInit {

  item:Etablissement={code:"",categorie:"",cs:"",latitude:0,longitude:0,nom:"",objectId:0,province:"",region:"",reseau:""};
  constructor(private crudService:CrudService,private router:Router,private sharingService:SharingService) { }

  ngOnInit(): void {
    this.item=this.sharingService.sharingValue;
  }

  public redirectAjout(objet){
    this.sharingService.sharingValue=objet;
    this.router.navigate(['add-appointment']);
  }


}
