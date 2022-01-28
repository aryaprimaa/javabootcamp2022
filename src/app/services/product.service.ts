import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {DataTableResponse} from "../model/dataTableResponse";
import {DataTableRequest} from "../model/datatablerequest";
import {data} from "jquery";

@Injectable({providedIn: 'root'})

export class ProductService {

  constructor(private http: HttpClient) {
  }

  list(): Observable<any> {
    return this.http.get(environment.baseUrl + "/product")
      .pipe(map(data => data))
  }

  getById(id: String): Observable<any> {
    return this.http.get(environment.baseUrl + '/product/check/' + id)
      .pipe(map(data => data))
  }

  listProduk(datatablesParameters: any): Observable<DataTableResponse> {
    const dtReq = new DataTableRequest();
    dtReq.draw = datatablesParameters.draw;
    dtReq.length = datatablesParameters.length;
    dtReq.start = datatablesParameters.start;
    dtReq.sortCol = datatablesParameters.order[0].column;
    dtReq.sortDir = datatablesParameters.order[0].dir;
    dtReq.extraParam = datatablesParameters.extraParam;
    return this.http.get(environment.baseUrl + '/listproduct/' + dtReq)
      .pipe(map(data => data as DataTableResponse))
  }
}
