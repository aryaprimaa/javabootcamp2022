import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }


  listCategory(): Observable<any>{
    return this.http.get(environment.baseUrl+'/category/listcat')
      .pipe(map(data => data))
  }
}
