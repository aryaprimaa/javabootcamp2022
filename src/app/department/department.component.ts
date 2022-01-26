import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Departemen} from "../model/departemen";
import {DepartemenService} from "../services/departemen.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  form!: FormGroup;
  formDeptDelete!: FormGroup;
  message!: any[];
  departemen!: Departemen;
  id!: string;

  constructor(private formBuild: FormBuilder,
              private deptser: DepartemenService,
              private ruter: Router,
              private route: ActivatedRoute) {
    this.form = this.formBuild.group({
      'id': [null],
      'name': [null],
      'description': [null]
    })
    this.formDeptDelete = this.formBuild.group({
      'id': new FormControl(null, [Validators.pattern("^[0-9]*$")]),
    })

  }

  ngOnInit(): void {
    this.route.params.subscribe(parameter => {
      this.id = parameter["id"];

    })
  }

  submit(): void {
    let dept = <Departemen>{};
    dept.nama = this.form.controls['name'].value;
    dept.description = this.form.controls['description'].value;
    if (this.id) {
      dept.id = Number.parseInt(this.id);
    }
    this.deptser.savedept({dept: dept}).subscribe({
      next: hasil => {
        //alert(hasil.id);
        this.ruter.navigateByUrl("/home")
      },
      error: error => {
        console.log(error.status);
      },
      complete: () => {
        console.log("Selamat Departemen telah ditambahkan")
      }
    })
  }

  delete(id: number): void {
    let dept = <Departemen>{};
    dept.id = id;
    console.log(dept);
    this.deptser.deleteDept(dept).subscribe({
      next: hasil => {
        console.log(hasil.status)
      },
      error: error => {
        alert(error.status);
      },
      complete: () => {
        this.ruter.navigate([this.ruter.url])
      }
    })
  }
}
