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

  private saveORGUrl = 'https://autoskolabe-production.up.railway.app/api/createOrganization';
  private postImageUrl = 'https://autoskolabe-production.up.railway.app/upload/image';
  private saveToWaitingRoomUrl = 'https://autoskolabe-production.up.railway.app/saveToWaitingRoom';
  private alORGUrl = 'https://autoskolabe-production.up.railway.app/api/allOrganization';
  private getWaitingRoomUrl = 'https://autoskolabe-production.up.railway.app/returnAllWaitingRoom';
  private getImageUrl = 'https://autoskolabe-production.up.railway.app/get/image/info/';
  private removeFromWaitingRoomUrl = 'https://autoskolabe-production.up.railway.app/removeFromWaitingRoom';
  private getAllStudentsInWaitingRoomUrl = 'https://autoskolabe-production.up.railway.app/returnAllStudentsInWaitingRoom';
  private getAllStudentsInOrganizationUrl = 'https://autoskolabe-production.up.railway.app/returnAllStudentsInOrganization';
  private addStudentsToOrganizationUrl = 'https://autoskolabe-production.up.railway.app/addMembersToOrganization';
  private getCurrentOrganizationIdUrl = 'https://autoskolabe-production.up.railway.app/returnCurrentOrganization';
  private degreaseTheoryHoursUrl = 'https://autoskolabe-production.up.railway.app/api/degreaseTheoryHours';
  private degreasePracticeHoursUrl = 'https://autoskolabe-production.up.railway.app/api/degreaseDrivingHours';

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

}
