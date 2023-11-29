import { Component , ViewChild , ElementRef} from '@angular/core';

class Course {
  name: string;
  instructor: string;
  

  constructor(name: string, instructor: string) {
    this.name = name;
    this.instructor = instructor;

  }
}

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class stdComponent {
  name?: string;
  age?: number;

  students: { name?: string, age?: number }[] = [];

  isVisible: boolean = false;

  courses: Course[] = [];

  onClick(): void {
    let obj = {
      name: this.name,
      age: this.age
    };
    this.students.push(obj);
    console.log(this.students);
  }

  onDisplay(): void {
    this.isVisible = !this.isVisible;
  }

  addCourse(courseName: string, instructor: string): void {
    const course = new Course(courseName, instructor);
    this.courses.push(course);
    console.log(this.courses);
  }

  removeCourse(course: Course): void {
    const index = this.courses.indexOf(course);
    if (index !== -1) {
      this.courses.splice(index, 1);
    }
  }
}