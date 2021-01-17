import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  url='http://localhost:8085/'

  constructor(private http:HttpClient) { }

  public getAll(type:String){
      return this.http.get(this.url+type);
  }

  public getItem(type:string){
    return this.http.get(type);
}

  public PostItem(type:String,object:any){
      return this.http.post(this.url+type,object).subscribe(
        (data)=>{
          console.log(data);
        },error=>{
          console.log(error);
        }
      );
  }

  public PutItem(object){
    return this.http.put(object._links.self.href,object).subscribe(
      (data)=>{
        console.log(data);
      },error=>{
        console.log(error);
      }
    );
}

public DeleteItem(object){
  return this.http.delete(object._links.self.href).subscribe(
    (data)=>{
      console.log(data);
    },error=>{
      console.log(error);
    }
  );
}
}
