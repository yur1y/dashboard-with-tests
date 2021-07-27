import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { catchError} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import config from '../../assets/config.json'
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class TestsService {

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

  saveTest(data: any): Observable<any>{
    
  return this.http.post(`${config.apiUrl}/tests`, data).pipe();
  }
}
