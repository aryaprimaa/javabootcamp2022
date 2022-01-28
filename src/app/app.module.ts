import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import {HttpClientModule} from "@angular/common/http";
import { DepartmentComponent } from './department/department.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MessageChildComponent } from './message-child/message-child.component';
import { MessageParentComponent } from './message-parent/message-parent.component';
import { ProductComponent } from './product/product.component';
import { ProductTableComponent } from './product-table/product-table.component';
import {DataTablesModule} from "angular-datatables";
import { ListproductComponent } from './listproduct/listproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    DepartmentComponent,
    MessageChildComponent,
    MessageParentComponent,
    ProductComponent,
    ProductTableComponent,
    ListproductComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        DataTablesModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
