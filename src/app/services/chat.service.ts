import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http: HttpClient) { }

  private whoIamURL = 'https://autoskola.herokuapp.com/whoIam';
  private getChatContactsAcceptedURL = 'https://autoskola.herokuapp.com/getChatContactsAccepted';
  private sendMessageURL = 'https://autoskola.herokuapp.com/chat';
  private chatGetURL = 'https://autoskola.herokuapp.com/chatGet';

  whoIam() {
    return this.http.get(this.whoIamURL);
  }

  getChatContactsAccepted() {
    return this.http.get(this.getChatContactsAcceptedURL);
  }

  sendMessage(message: any, userReceiver: any) {
    return this.http.post(this.sendMessageURL, {"message": message, "userReceiver": {"username": userReceiver}});
  }

  chatGet(userReceiver: any, userSender: any) {
    return this.http.post(this.chatGetURL, {"userReceiver": {"username": userReceiver}, "userSender": {"username": userSender}});
  }

}
