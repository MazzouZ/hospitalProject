import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../services/crud.service';
import { SharingService } from '../services/sharing.service';

export interface Etablissement{
   code:String 
	 nom:String
	 categorie:String
	 reseau:String
	 cs:String
	 province:String
   region:String
   objectId:Number;
	 longitude:Number;
	 latitude:Number;
  
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  lat = 31.7945;
  long = -7.0849;
  zoom=7;
   
  data:any[];

  constructor(private crudService:CrudService,private router:Router,private sharingService:SharingService) { }

  ngOnInit(): void {
    setTimeout(()=>{
      this.getEtbl();
    },500);
  }

  public getEtbl(){
    this.crudService.getAll('etablissements').subscribe(
      (element)=>{
        this.data=[];
        // @ts-ignore
        this.data=element._embedded.etablissements;
      },error=>{
        console.log(error);
      }
    );
  }

  public redrect(objet){
    this.sharingService.sharingValue=objet;
    this.router.navigate(['Detailmp']);
    }
}
