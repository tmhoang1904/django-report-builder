import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';

import {MatButtonModule, MatCheckboxModule, MatInputModule, MatToolbarModule, MatSelectModule} from '@angular/material';

import { AppComponent } from './app.component';
import { NewReportComponent } from './new-report/new-report.component';

import { ApiService } from './api.service';

const appRoutes: Routes = [
  { path: 'report/add', component: NewReportComponent, data: {title: 'Add New Report'} },
];

@NgModule({
  declarations: [
    AppComponent,
    NewReportComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatToolbarModule,
    MatSelectModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
