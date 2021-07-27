import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  logs: any[] = []; // capture logs for testing

  log(message: any) {
    this.logs.push(message);
    console.log(message);
  }
}