import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import api from '../../assets/config.json';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  constructor(private http: HttpClient) { }

  submitResult(data:any): Observable<any>{
    return this.http.post(`${api.apiUrl}/results`, data).pipe()
  }
  stats(): Observable<any>{
    return this.http.get(`${api.apiUrl}/results/stats`).pipe()
  }
}
