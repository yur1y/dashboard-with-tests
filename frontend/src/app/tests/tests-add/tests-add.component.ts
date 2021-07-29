import { Component, Input, OnInit } from '@angular/core';
import { TestsService } from 'src/app/services/tests.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-tests-add',
  templateUrl: './tests-add.component.html',
  styleUrls: ['./tests-add.component.css'],
  providers: [TestsService]
})
export class TestsAddComponent implements OnInit {

  @Input('ngModel') name:string = 'default';
  @Input('ngModel') time: number = 10;
  @Input('ngModel') test: any[] = [];
  constructor(private testService: TestsService, private router: Router) {  }

  ngOnInit(): void {
     this.getTest();
  }

  checkCorrect(event: any) { 
    const id =  event.target.id;
    this.test[id.slice(-2,-1)].correct[id.slice(-1)] = event.target.checked;
  }

  getTest(): void {
    this.testService.sampleTest()
      .subscribe(res => { this.test = res})
  }

  createTest():void {
    const {name, time, test:questions} = this
   this.testService.createTest({name, time, questions}).subscribe(()=> {
    this.router.navigate(['tests']).then(()=>{
      window.location.reload();
    })
   });
  }

}
