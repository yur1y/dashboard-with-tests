import { Component, Input, OnInit } from '@angular/core';
import { LoggerService } from 'src/app/services/logger.service';
import { TestsService } from 'src/app/services/tests.service';

@Component({
  selector: 'app-tests-add',
  templateUrl: './tests-add.component.html',
  styleUrls: ['./tests-add.component.css'],
  providers: [TestsService, LoggerService]
})
export class TestsAddComponent implements OnInit {

  @Input('ngModel') name:string = 'default';
  @Input('ngModel') time: number = 10;
  @Input('ngModel') test: any[] = [];
  constructor(public testService: TestsService, public logger: LoggerService) {
   
   }

  ngOnInit(): void {
     this.getTest();
  }

  getTest(): void {
    this.testService.sampleTest()
      .subscribe(res => { this.test = res});
  }

  saveTest():void {
    this.logger.log({name: this.name, time:this.time, test: this.test}) // works

    this.testService.saveTest({name: this.name, time:this.time, questions: this.test}).subscribe()
  }

}
