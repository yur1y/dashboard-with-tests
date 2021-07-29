import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as api } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private http: HttpClient) { }

  createQuestions(data:any): Observable<any> {
    return this.http.post(`${ api.apiUrl}/questions`, data).pipe();
  }
}
