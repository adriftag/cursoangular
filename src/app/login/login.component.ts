import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  passwd: string;
  isLoading: boolean;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.isLoading = true;
    alert (`user= ${this.username} ; pass= ${this.passwd}`);
    this.authService.login(this.username, this.passwd).subscribe(success => {
      this.isLoading = false;
      if (success && this.authService.redirectUrl) {
        this.router.navigate([this.authService.redirectUrl]);
        this.authService.redirectUrl = null;
      }
      else if (success) this.router.navigate(['home']);
      else {
        alert('Usuario o contraseña erroneos');
        this.username = null;
        this.passwd = null;
      }
    })
    this.isLoading = false;

  }

}
