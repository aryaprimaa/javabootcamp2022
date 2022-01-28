import {Component, OnInit, ViewChild} from '@angular/core';
import {DataTableDirective} from "angular-datatables";
import {Subject} from "rxjs";
import {ProductService} from "../services/product.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.css']
})
export class ListproductComponent implements OnInit {

  @ViewChild(DataTableDirective, {static: false})
  detm!: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  form!: FormGroup;

  constructor(private ps: ProductService, private formBuild: FormBuilder) {
    this.form = this.formBuild.group({
      'name': new FormControl(null, [Validators.required]),
      'message': new FormControl(null, [Validators.required]),
    })
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe()
  }

  ngOnInit(): void {
    const that = this;
    this.dtOptions = {
      ajax: (datatablesParameters: any, callback) => {
        const prmt = new Map<String, any>();
        datatablesParameters.extraParam['nama'] = this.form.controls['nama'].value;
        that.ps.listProduk(datatablesParameters).subscribe(resp => {
          callback({
            recordsTotal: resp.recordsTotal,
            recordsFiltered: resp.recordsFiltered,
            data: resp.data,
            draw: resp.draw,
          });
        });
      },
      searching: false,
      processing: true,
      serverSide: true,
      columns: [{
        title: 'ID',
        data: 'idproduct',
        orderable: false
      },
        {
          title: 'Nama',
          data: 'Nama Product'
        },
        {
          title: 'Keterangan',
          data: 'deskripsi Product'
        }, {
          title: 'Harga',
          data: 'harga Product',
          render: $.fn.dataTable.render.number(',', ',', 0)
        },
        {
          title: 'Action',
          orderable: false,
          render(data, type, row): any {
            return "<button>edit</button>"
          }
        }]
    }
  }

  caridata() {
    this.detm.dtInstance.then((di: DataTables.Api) => {
      di.draw();
    });
  }
}
