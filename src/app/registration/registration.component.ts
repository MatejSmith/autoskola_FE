import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user: User;
  checkBadRegister: boolean = false;
  message: Object;
  messageTrue: boolean = false;
  constructor(private http: HttpClient) {
    this.user = new User();
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.user.authority === 'ADMIN') {
    this.messageTrue = true;
    this.http.post('https://autoskola.herokuapp.com/register', this.user).subscribe(
      (data: any) => {
        if (data.status === 'error')
        alert(data.message);
        else
        alert(data.message);
      },
    );
  }
  else if (this.user.authority === 'INSTRUCTOR')
  {
    this.messageTrue = true;
    this.user.confirmPassword = 'INSTRUCTOR'
    this.http.post('https://autoskola.herokuapp.com/register', this.user).subscribe(
      (data: any) => {
        if (data.status === 'error')
        alert(data.message);
        else{
          alert(data.message);
          // route to login
          window.location.href = 'https://autoskola-fe-mda8.vercel.app/login';
        }
      },
    );
  }
  else{
    this.messageTrue = true;
    this.user.confirmPassword = 'STUDENT'
    this.http.post('https://autoskola.herokuapp.com/register', this.user).subscribe(
      (data: any) => {
        if (data.status === 'error')
        alert(data.message);
        else{
          alert(data.message);
          // route to login
          window.location.href = 'https://autoskola-fe-mda8.vercel.app/login';
        }
      },
    );
  }
}
}
