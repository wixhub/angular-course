import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Course } from "../model/course";

@Component({
  selector: "course-card",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.css"],
})
export class CourseCardComponent implements OnInit {
  @Input()
  course: Course;

  @Input()
  cardIndex: number;

  @Output("courseSelected")
  courseEmitter = new EventEmitter<Course>();

  constructor() {}

  ngOnInit(): void {}

  onCourseViewed() {
    console.log("card before");
    this.courseEmitter.emit(this.course);
    console.log("card after");
  }

  ifImgVisible() {
    return this.course && this.course.iconUrl;
  }

  cardClasses() {
    if(this.course.category == "BEGINNER"){
      return 'beginner';
    }

  }
}
