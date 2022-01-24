import {Component, OnInit} from '@angular/core';
import {DepartemenService} from "../services/departemen.service";
import {Departemen} from "../model/departemen";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [DepartemenService]
})
export class HomeComponent implements OnInit {

  listDept!: Departemen[];

  constructor(private dept: DepartemenService) {
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
      alert("Selamat datang di Neraka")
    }
  })
  }
}
