import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {DepartemenService} from "../services/departemen.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Departemen} from "../model/departemen";

@Component({
  selector: 'app-deptinduk',
  templateUrl: './deptinduk.component.html',
  styleUrls: ['./deptinduk.component.css']
})
export class DeptindukComponent implements OnInit {
  form!: FormGroup;
  departemen!: Departemen;
  kirimPesan!: Departemen;

  constructor(private formBuild: FormBuilder,
              private deptser: DepartemenService,
              private ruter: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.form = this.formBuild.group({
      'id': [null],
      'name': [null],
      'description': [null]
    })
  }
  simpan(): void {
    let dept = <Departemen>{};
    dept.nama = this.form.controls['name'].value;
    dept.description = this.form.controls['description'].value;
    this.kirimPesan = dept;
  }
}
