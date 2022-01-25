import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Departemen} from "../model/departemen";
import {DepartemenService} from "../services/departemen.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  form!:FormGroup;

  departemen!:Departemen;

  constructor(private formBuild: FormBuilder,
              private deptser: DepartemenService,
              private ruter: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.form = this.formBuild.group({
      'id':[null],
      'name':[null],
      'description':[null]
    })
  }

  submit():void {
    let dept = <Departemen>{};
    dept.nama = this.form.controls['name'].value;
    dept.description = this.form.controls['description'].value;

    this.deptser.savedept({dept: dept}).subscribe({
      next: hasil => {
        alert(hasil.status);
        this.ruter.navigateByUrl("/editdept/" + hasil.id)
      },
      error: error => {
        console.log(error)
      },
      complete: () => {
        console.log("Selamat Departemen telah dibuat")
      }
    })
  }




}
