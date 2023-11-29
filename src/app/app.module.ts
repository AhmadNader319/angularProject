import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';
import { stdComponent } from './student/student.component';
@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    OutputComponent,
    stdComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
