import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import api  from '../../assets/config.json'

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private http: HttpClient) { }

  createQuestions(data:any): Observable<any> {
    return this.http.post(`${ api.apiUrl}/questions`, data).pipe();
  }
}
