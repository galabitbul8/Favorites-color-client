import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FavoriteColor } from '../favoriteColor.interface';

const httpOptions = {
  headers:new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class FavoriteColorService {

  constructor(private http:HttpClient) { }

  getFcList(){
    return this.http.get('server/api/v1/favoriteColor');
  }

  updateFcById(fc:FavoriteColor){
    let body = JSON.stringify(fc);
    return this.http.post('server/api/v1/favoriteColor',body,httpOptions);
  }

}
