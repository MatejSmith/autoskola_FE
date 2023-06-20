import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  private instructorRegisterUrl = 'https://autoskola.herokuapp.com/api/instructorRegister';
  private studentRegisterUrl = 'https://autoskola.herokuapp.com/api/studentRegister';
  private adminRegisterUrl = 'https://autoskola.herokuapp.com/api/adminRegister';
  private loginUrl = 'https://autoskola.herokuapp.com/api/login';
  private getAuthorityUrl = 'https://autoskola.herokuapp.com/api/returnAuthority';
  private sendConfirmationTokenUrl = 'https://autoskola.herokuapp.com/confirm-account';

  registerInstructor(user: User) {
    return this.http.post<User>(this.instructorRegisterUrl, user);
  }

  registerStudent(user: User) {
    return this.http.post<User>(this.studentRegisterUrl, user);
  }

  registerAdmin(user: User) {
    return this.http.post<User>(this.adminRegisterUrl, user);
  }

  login(user: User){
    return this.http.post(this.loginUrl, {username: user.username, password: user.password});
  }

  getAuthority(): Observable<String>{
    return this.http.get<String>(this.getAuthorityUrl);
  }

  sendConfirmationToken(token: String){
    return this.http.post(this.sendConfirmationTokenUrl + '?token=' + token, null);
  }

  isLoggedIn() {
    return sessionStorage.getItem('token');
  }
}
