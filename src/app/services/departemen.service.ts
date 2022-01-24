import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DepartemenService {

  constructor(private http: HttpClient) { }


  listDepartemen(): Observable<any>{
    return this.http.get(environment.baseUrl+'/department/listdept')
      .pipe(map(data => data))
  }
}
