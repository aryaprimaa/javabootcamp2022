import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import {HttpClientModule} from "@angular/common/http";
import { DepartmentComponent } from './department/department.component';
import {ReactiveFormsModule} from "@angular/forms";
import { DeptindukComponent } from './deptinduk/deptinduk.component';
import { DeptchildComponent } from './deptchild/deptchild.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    DepartmentComponent,
    DeptindukComponent,
    DeptchildComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
