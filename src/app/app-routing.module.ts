import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {DepartmentComponent} from "./department/department.component";
import {MessageParentComponent} from "./message-parent/message-parent.component";

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'adddept', component: DepartmentComponent},
  {path:'about', component: AboutComponent},
  {path:'editdept/:id', component:DepartmentComponent},
  {path:'delete/:id', component:DepartmentComponent},
  {path:'message',component:MessageParentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
