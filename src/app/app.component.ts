import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'get-student-library';
  clickedDetails = [];
  students: any;
  text = '';

  constructor(private router: Router, private http: HttpClient) {
    this.getStudent();
  }

  updateValue(v) {
    this.text = v.target.value;
  }

  changeRoute(url) {
  this.router.navigateByUrl(url);
  }

  getStudent() {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((x) => {
      this.students = x
    })
  }

  getStudentDetails(studentId) {
    this.http.get('https://jsonplaceholder.typicode.com/users/' + studentId).subscribe((res) => {
    this.clickedDetails.push(studentId);
  })
  }

  showDetails(studentId) {
    if (this.clickedDetails.includes(studentId)) {
      return true;
    } else {
      return false;
    }
  }
}
