import {Component, OnInit} from '@angular/core';
import {DepartemenService} from "../services/departemen.service";
import {Departemen} from "../model/departemen";
import {CategoryService} from "../services/category.service";
import {Category} from "../model/Category";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [DepartemenService, CategoryService]
})
export class HomeComponent implements OnInit {
  form!: FormGroup;
  formDeptDelete!: FormGroup;
  message!: any[];
  departemen!: Departemen;
  listDept!: Departemen[];
  listCat!: Category[];

  constructor(private dept: DepartemenService,
              private cat: CategoryService,
              private formBuild: FormBuilder,
              private deptser: DepartemenService,
              private ruter: Router,
              private route: ActivatedRoute) {
    this.formDeptDelete = this.formBuild.group({
      'id': new FormControl(null, [Validators.pattern("^[0-9]*$")]),
    })
  }

  ngOnInit(): void {
    this.dept.listDepartemen().subscribe({
      next: hasil => {
        this.listDept = hasil
      },
      error: error => {
        console.log(error)
      }
      ,
      complete: () => {
        console.log()
      }
    })

    this.cat.listCategory().subscribe({
      next: hasil => {
        this.listCat = hasil
      },
      error: error => {
        console.log(error)
      }
      ,
      complete: () => {
        console.log()
      }
    })
  }

  deletee(id: number): void {
    let dept = <Departemen>{};
    dept.id = id;
    console.log(dept);
    this.dept.deleteDept(dept).subscribe({
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
