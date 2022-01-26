import {Component, Input, OnInit} from '@angular/core';
import {Departemen} from "../model/departemen";

@Component({
  selector: 'app-deptchild',
  templateUrl: './deptchild.component.html',
  styleUrls: ['./deptchild.component.css']
})
export class DeptchildComponent implements OnInit {

  constructor() { }
  @Input() pesan!: Departemen
  ngOnInit(): void {
  }

}
