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
  listKategori(): Observable<any>{
    return this.http.get(environment.baseUrl+'/department/listcat')
      .pipe(map(data => data))
  }
  savedept({dept}: { dept: any }): Observable<any>{
    console.log(dept)
    let url = '/savedept';
    if (dept.id){
      url = '/updatedept';
    }
    return this.http.post(environment.baseUrl+'/department/savedept',dept)
      .pipe(map(data => data))
  }
  getDepartemenById(id:String): Observable<any>{
    return this.http.post(environment.baseUrl+'/department/findById/{depId}'+id,null)
      .pipe(map(data => data))
  }
}
