import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {DepartmentComponent} from "./department/department.component";
import {MessageParentComponent} from "./message-parent/message-parent.component";
import {ProductComponent} from "./product/product.component";
import {ProductTableComponent} from "./product-table/product-table.component";
import {ListproductComponent} from "./listproduct/listproduct.component";

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'adddept', component: DepartmentComponent},
  {path:'about', component: AboutComponent},
  {path:'editdept/:id', component:DepartmentComponent},
  {path:'delete/:id', component:DepartmentComponent},
  {path:'message',component:MessageParentComponent},
  {path:'product', component:ProductComponent},
  {path:'addTrx', component:ProductComponent},
  {path:'listproduct', component:ListproductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
