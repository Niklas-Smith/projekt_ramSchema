import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CourseInterface } from '../model/courseInterface';

@Injectable({
  providedIn: 'root'
})
export class CourseInfoService {

  private url:string = "miun_courses.json"

  constructor(private http:HttpClient) {}

getCourses(): Observable<CourseInterface[]> {
  
return this.http.get<CourseInterface[]>(this.url);

}

}

