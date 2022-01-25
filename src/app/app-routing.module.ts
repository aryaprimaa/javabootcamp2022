import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {DepartmentComponent} from "./department/department.component";

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'adddept', component: DepartmentComponent},
  {path:'about', component: AboutComponent},
  {path:'editdept/id', component:DepartmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
