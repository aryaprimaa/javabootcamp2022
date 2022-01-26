import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Departemen} from "../model/departemen";

@Injectable({
  providedIn: 'root'
})
export class DepartemenService {

  constructor(private http: HttpClient) { }


  listDepartemen(): Observable<any>{
    return this.http.get(environment.baseUrl+'/department/listdept')
      .pipe(map(data => data))
  }

  savedept({dept}: { dept: any }): Observable<any>{
    console.log(dept)
    let url = '/department/savedept';
    if (dept.id){
      url = '/department/updatedept';
    }
    return this.http.post(environment.baseUrl+url,dept)
      .pipe(map(data => data))
  }

  deleteDept(department:Departemen):Observable<any>{
    console.log(department.id)
    const options = {
      body: {
        id: department.id
      }
    }
    return this.http.delete(environment.baseUrl+'/delete/{reqid}',options).pipe(map(data=>data))
  }
}
