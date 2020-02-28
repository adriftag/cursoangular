import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private students : User[] = environment.complexStudent ? [
    {
      nombre : 'Edu',
      apellidos : 'Gar',
      email : 'adasd@fdsf.com', 
      edad : 45
    },
    {
      nombre : 'Jua',
      apellidos : 'Pere',
      email : 'gfuiouioer@fdsf.com', 
      edad : 35
    }
  ] :
  [{
    nombre : 'Edu',
    apellidos : 'Gar Listo',
    email : 'adasd@fdsf.com', 
    edad : 45
  },
  {
    nombre : 'Jua',
    apellidos : 'Pere Listo',
    email : 'gfuiouioer@fdsf.com', 
    edad : 35
  }];
  constructor() { }

  getStudents(): Observable<User[]> {
    return of(this.students);
  }
  postStudent(student : User) {
    this.students.push(student);
  }
}
