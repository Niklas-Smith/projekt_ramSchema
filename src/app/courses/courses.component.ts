import { Component } from '@angular/core';
import { CourseInterface } from '../model/courseInterface';
import { CourseInfoService } from '../services/courseinfo.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-courses',
  imports: [CommonModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
courseList: CourseInterface[] = [];

constructor(private courseinfoservice: CourseInfoService) {}

  ngOnInit() {

    this.courseinfoservice.getCourses().subscribe(data => {

      this.courseList = data;
    }

    )

  
    
  }

sortCode() {
this.courseinfoservice.getCourses().subscribe(data => {
this.courseList = data;
this.courseList.sort((a,b) => a.courseCode > b.courseCode ? 1 : -1)
})
  
}
sortName() {
this.courseinfoservice.getCourses().subscribe(data => {
this.courseList = data;
this.courseList.sort((a,b) => a.courseName > b.courseName ? 1 : -1)
})
  
}

sortSubject() {
this.courseinfoservice.getCourses().subscribe(data => {
this.courseList = data;
this.courseList.sort((a,b) => a.subject > b.subject ? 1 : -1)
})
  
}
sortPoints() {
this.courseinfoservice.getCourses().subscribe(data => {
this.courseList = data;
this.courseList.sort((a,b) => a.points > b.points ? 1 : -1)
})
  
}


}
