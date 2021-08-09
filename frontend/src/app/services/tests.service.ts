import { Injectable, EventEmitter } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { environment as api } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TestsService {

  testCreated: EventEmitter<boolean> = new EventEmitter();

  constructor(private http: HttpClient) {}

  sampleTest(): Observable<any>{
   return Observable.create((observer: Subscriber<any>) => {
     const test = [];
      for(let i =0; i< 8; i++) {
        test.push({text:`question ${i + 1} text ?`, variants: ['answer 1','answer 2','answer 3','answer 4'],
         correct: [true,false,false,false]})
        observer.next(test);
      }
      observer.complete();
  });
  }

  createTest(data: any): Observable<any>{
    this.testCreated.emit(true);
    return this.http.post(`${ api.apiUrl}/tests`, data).pipe();
  }
  getTests(): Observable<any>{  
    return this.http.get(`${api.apiUrl}/tests`).pipe()
}

getTest(id: string): Observable<any>{
  return this.http.get(`${api.apiUrl}/tests/${id}`).pipe()
}

}
