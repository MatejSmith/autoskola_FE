import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  private instructorRegisterUrl = 'https://autoskolabe-production.up.railway.app/api/instructorRegister';
  private studentRegisterUrl = 'https://autoskolabe-production.up.railway.app/api/studentRegister';
  private adminRegisterUrl = 'https://autoskolabe-production.up.railway.app/api/adminRegister';
  private loginUrl = 'https://autoskolabe-production.up.railway.app/api/login';
  private getAuthorityUrl = 'https://autoskolabe-production.up.railway.app/api/returnAuthority';
  private sendConfirmationTokenUrl = 'https://autoskolabe-production.up.railway.app/confirm-account';

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
}
