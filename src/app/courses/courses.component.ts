import { Component } from '@angular/core';
import { CourseInterface } from '../model/courseInterface';
import { CourseInfoService } from '../services/courseinfo.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-courses',
  imports: [CommonModule, FormsModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
courseList: CourseInterface[] = [];
coursesFilter: CourseInterface[] = [];
filterInput: string = "";


uniqueCourses: CourseInterface[] = [];

constructor(private courseinfoservice: CourseInfoService) {}

  ngOnInit() {

    this.courseinfoservice.getCourses().subscribe(data => {

      this.courseList = data;
      this.coursesFilter = data;
  

     const spottedCourse:string[]= [];

this.uniqueCourses = this.courseList.filter(course=>{
if(!spottedCourse.includes(course.subject)) {
spottedCourse.push(course.subject)
  return true;
} else {

return false;
}

})  
    

    }

    )
   
  }

filterCourses():void {
this.coursesFilter = this.courseList.filter((course) =>
course.courseCode.toLowerCase().includes(this.filterInput.toLowerCase()) ||
course.courseName.toLowerCase().includes(this.filterInput.toLowerCase())

);
}



sortCode():void {
this.courseinfoservice.getCourses().subscribe(data => {
this.coursesFilter = data;
this.coursesFilter.sort((a,b) => a.courseCode > b.courseCode ? 1 : -1)
})
  
}
sortName():void {
this.courseinfoservice.getCourses().subscribe(data => {
this.coursesFilter = data;
this.coursesFilter.sort((a,b) => a.courseName > b.courseName ? 1 : -1)
})
  
}

sortSubject():void {
this.courseinfoservice.getCourses().subscribe(data => {
this.coursesFilter = data;
this.coursesFilter.sort((a,b) => a.subject > b.subject ? 1 : -1)
})
  
}
sortPoints():void {
this.courseinfoservice.getCourses().subscribe(data => {
this.coursesFilter = data;
this.coursesFilter.sort((a,b) => a.points > b.points ? 1 : -1)
})
  
}





}
