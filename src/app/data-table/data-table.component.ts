import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  @ViewChild('dataTableForm', {static: false}) public dataTableForm: NgForm;
  users: User[] = [];
  user: User = new User();

  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.userService.getStudents().subscribe(students => {
      this.users = students;
    });
    this.user = new User();
  }

  summit() {
    this.userService.postStudent(this.user);
    this.reset();
  }

  reset() {
    this.user = new User();
    this.dataTableForm.resetForm();
  }
}
