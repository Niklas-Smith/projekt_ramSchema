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

}
