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
// import {MessageParentComponent} from "./deptinduk/deptinduk.component";
// import {MessageChildComponent} from "./deptchild/deptchild.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    DepartmentComponent,
    MessageChildComponent,
    MessageParentComponent,
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
