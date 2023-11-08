import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name?: string
  age?: number;
  students: { name?: string, age?: number }[] = []

  onClick(st: { name?: string, age?: number }) {
    this.students.push(st);
  }

}
