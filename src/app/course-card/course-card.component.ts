import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { COURSES } from "src/db-data";
import { Course } from "../model/course";

@Component({
  selector: "course-card",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.css"]
})
export class CourseCardComponent implements OnInit {
  @Input()
  course: Course;

  @Output()
  courseSelected = new EventEmitter<Course>();

  ngOnInit(): void {}

  onCourseViewed() {
    console.log(this.course.description);
    this.courseSelected.emit(this.course);
  }
}
