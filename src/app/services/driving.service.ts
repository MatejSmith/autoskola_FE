import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DrivingService {

  constructor(private http: HttpClient) { }

  private saveDrivingDateUrl = 'https://autoskola.herokuapp.com/newReservation';
  private reserveDayTimeUrl = 'https://autoskola.herokuapp.com/reserveDayTime';
  private reservationForInstrucorUrl = 'https://autoskola.herokuapp.com/requestForInstructor';
  private reservationAccptedUrl = 'https://autoskola.herokuapp.com/reservationAccepted';
  private acceptedForInstructorUrl = 'https://autoskola.herokuapp.com/acceptedForInstructor';

  reserveDrivingDate(drivingDate: any, id_organization: number) {
    return this.http.post(this.saveDrivingDateUrl, {"reservationDate": drivingDate, "autoskolaOrganization": {"id_organization": id_organization}});
  }

  reserveDayTime(drivingDate: any, time: any, id: any) {
    return this.http.post(this.reserveDayTimeUrl, {"time": time, "reservationDay": {"id": id, "reservationDate": drivingDate} });
  }

  reservationForInstructor() {
    return this.http.get(this.reservationForInstrucorUrl);
  }

  reservationAccpted(request: any) {
    return this.http.post(this.reservationAccptedUrl, request);
  }

  acceptedForInstructor() {
    return this.http.get(this.acceptedForInstructorUrl);
  }
}