import {Component, OnInit} from '@angular/core';
import {DepartemenService} from "../services/departemen.service";
import {Departemen} from "../model/departemen";
import {CategoryService} from "../services/category.service";
import {Category} from "../model/Category";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [DepartemenService, CategoryService]
})
export class HomeComponent implements OnInit {

  listDept!: Departemen[];
  listCat!: Category[];

  constructor(private dept: DepartemenService , private cat: CategoryService ) {
  }

  ngOnInit(): void {
    this.dept.listDepartemen().subscribe({
      next: hasil => {
        this.listDept = hasil
      },
      error: error=>
    {
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
      error: error=>
      {
        console.log(error)
      }
      ,
      complete: () => {
        console.log()
      }
    })
  }
}
