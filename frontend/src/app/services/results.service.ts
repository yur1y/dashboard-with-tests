import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as api } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  resultSubmitted: EventEmitter<boolean> = new EventEmitter();

  constructor(private http: HttpClient) { }

  submitResult(data:any): Observable<any>{
    this.resultSubmitted.emit(true);
    return this.http.post(`${api.apiUrl}/results`, data).pipe()
  }
  stats(): Observable<any>{
    return this.http.get(`${api.apiUrl}/results/stats`).pipe()
  }
}
