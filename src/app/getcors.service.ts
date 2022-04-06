import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetcorsService {

  constructor(private http: HttpClient) { }

  getCors(){
    return this.http.get("http://localhost:9000/api/cors",{responseType: 'text'});
  }
}
