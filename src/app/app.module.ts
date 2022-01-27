import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import {HttpClientModule} from "@angular/common/http";
import { DepartmentComponent } from './department/department.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
// import {MessageParentComponent} from "./deptinduk/deptinduk.component";
// import {MessageChildComponent} from "./deptchild/deptchild.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    DepartmentComponent,
    // MessageParentComponent,
    // MessageChildComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
