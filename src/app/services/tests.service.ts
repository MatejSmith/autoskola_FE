import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestsService {

  constructor(private http: HttpClient) { }

  private saveTestNameUrl = 'https://autoskola.herokuapp.com/saveTestName';
  private saveTestImageUrl = 'https://autoskola.herokuapp.com/saveTestImage';
  private saveTestQuestionsUrl = 'https://autoskola.herokuapp.com/saveQuestion';
  private saveAnswerUrl = 'https://autoskola.herokuapp.com/saveAnswer';
  private getAllTestsUrl = 'https://autoskola.herokuapp.com/getAllTests';
  private getAllQuestionsInTestUrl = 'https://autoskola.herokuapp.com/getAllQuestionsInTest';

  saveTestName(testName: string) {
    return this.http.post(this.saveTestNameUrl, {"nameOfTest": testName});
  }

  saveTestImage(testImage: any) {
    return this.http.post(this.saveTestImageUrl, testImage);
  }

  saveTestQuestions(testQuestions: any, containImage: boolean, testID: string) {
    return this.http.post(this.saveTestQuestionsUrl, {"textOfQuestion": testQuestions, "containsImage": containImage, "autoskolaTest": {"id": testID}});
  }

  saveAnswer(textOfAnswer: any, correctOrNot: boolean, id: string) {
    return this.http.post(this.saveAnswerUrl, {"textOfAnswer": textOfAnswer, "correctOrNot": correctOrNot, "autoskolaQuestion": {"id": id}});
  }

  getAllTests() {
    return this.http.get(this.getAllTestsUrl);
  }

  getAllQuestionsInTest(testID: string) {
    return this.http.post(this.getAllQuestionsInTestUrl, {"id": testID});
  }

}
