import { waitingRoom } from './../waitingRoom';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Organization } from '../organization';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  constructor(private http: HttpClient) { }

  private saveORGUrl = 'https://autoskola.herokuapp.com/api/createOrganization';
  private postImageUrl = 'https://autoskola.herokuapp.com/upload/image';
  private saveToWaitingRoomUrl = 'https://autoskola.herokuapp.com/saveToWaitingRoom';
  private alORGUrl = 'https://autoskola.herokuapp.com/api/allOrganization';
  private getWaitingRoomUrl = 'https://autoskola.herokuapp.com/returnAllWaitingRoom';
  private getImageUrl = 'https://autoskola.herokuapp.com/get/image/info/';
  private removeFromWaitingRoomUrl = 'https://autoskola.herokuapp.com/removeFromWaitingRoom';
  private getAllStudentsInWaitingRoomUrl = 'https://autoskola.herokuapp.com/returnAllStudentsInWaitingRoom';
  private getAllStudentsInOrganizationUrl = 'https://autoskola.herokuapp.com/returnAllStudentsInOrganization';
  private addStudentsToOrganizationUrl = 'https://autoskola.herokuapp.com/addMembersToOrganization';
  private getCurrentOrganizationIdUrl = 'https://autoskola.herokuapp.com/returnCurrentOrganization';
  private degreaseTheoryHoursUrl = 'https://autoskola.herokuapp.com/api/degreaseTheoryHours';
  private degreasePracticeHoursUrl = 'https://autoskola.herokuapp.com/api/degreaseDrivingHours';
  private sendApologiesUrl = 'https://autoskola.herokuapp.com/sendApologies';
  private getAllApologiesUrl = 'https://autoskola.herokuapp.com/getApologies';
  private deleteApologyUrl = 'https://autoskola.herokuapp.com/deleteApology';
  private reservationDoneUrl = 'https://autoskola.herokuapp.com/reservationDone';
  private getInfoForStudentUrl = 'https://autoskola.herokuapp.com/getInfoForStudent';

  saveORG(organization: Organization) {
    return this.http.post<Organization>(this.saveORGUrl, organization);
  }

  postImage(logo: any) {
    return this.http.post<Organization>(this.postImageUrl, logo);
  }

  saveToWaitingRoom(organization: Organization) {
    return this.http.post<Organization>(this.saveToWaitingRoomUrl, {"autoskolaOrganization": {"id_organization": organization.id_organization}});
  }

  allORG() {
    return this.http.get<Organization[]>(this.alORGUrl);
  }

  getWaitingRoom() {
    return this.http.get<Organization[]>(this.getWaitingRoomUrl);
  }

  getImage(id: number) {
    return this.http.get(this.getImageUrl + id);
  }

  cancelWaitingRoom(id: number) {
    return this.http.post(this.removeFromWaitingRoomUrl, {"id_waiting": id});
  }

  getAllStudentsInWaitingRoom(): Observable<waitingRoom[]> {
    return this.http.get<waitingRoom[]>(this.getAllStudentsInWaitingRoomUrl);
  }

  getAllStudentsInOrganization(): Observable<any[]> {
    return this.http.get<any[]>(this.getAllStudentsInOrganizationUrl);
  }

  addStudentsToOrganization(userId: number, organizationId: number) {
    return this.http.post(this.addStudentsToOrganizationUrl, {"autoskolaOrganization": {"id_organization": organizationId}, "userEntity": {"id": userId}});
  }

  getCurrentOrganizationId(): Observable<any> {
    return this.http.get<any>(this.getCurrentOrganizationIdUrl);
  }

  degreaseTheoryHours(username: string) {
    return this.http.post(this.degreaseTheoryHoursUrl, {"username": username});
  }

  degreasePracticeHours(username: string) {
    return this.http.post(this.degreasePracticeHoursUrl, {"username": username});
  }

  sendApologies(dayOfApology: string, messageToInstructor: string) {
    return this.http.post(this.sendApologiesUrl, {"dayOfApology": dayOfApology, "messageToInstructor": messageToInstructor});
  }

  getAllApologies(): Observable<any[]> {
    return this.http.get<any[]>(this.getAllApologiesUrl);
  }

  deleteApology(id: number) {
    return this.http.post(this.deleteApologyUrl, {"id": id});
  }

  reservationDone(id: string, username: string) {
    return this.http.post(this.reservationDoneUrl, {"id": id, "userEntity": {"username": username}});
  }

  getInfoForStudent() {
    return this.http.get(this.getInfoForStudentUrl);
  }
}
