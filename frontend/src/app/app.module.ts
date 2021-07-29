import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { TestsTakeComponent } from './tests/tests-take/tests-take.component';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  declarations: [
    TestsTakeComponent
  ]
})
export class AppModule { }
