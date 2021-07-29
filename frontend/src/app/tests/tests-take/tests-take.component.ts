import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResultsService } from 'src/app/services/results.service';
import { TestsService } from 'src/app/services/tests.service';

@Component({
  selector: 'app-tests-take',
  templateUrl: './tests-take.component.html',
  styleUrls: ['./tests-take.component.css']
})
export class TestsTakeComponent implements OnInit, OnDestroy {

  test: any;
  timeLeft: number = 0;
  interval: any;
  showTimeLeft: string = '00:00';

  constructor(private router: Router,
     private route: ActivatedRoute,
       private testsService: TestsService,
       private resultsService: ResultsService) { 
    this.test = {}
  }

  ngOnInit(): void {
    const takeTest = confirm('press ok to start test')
    if(!takeTest) {
      this.router.navigate(['tests'])
    } else {
      const id = this.route.snapshot.url[2].path;
    this.getTest(id);
    }
  }

  ngOnDestroy(): void {
    this.submitTest()
  }

  checkCorrect(event:any): void {
    const id =  event.target.id;
    this.test.questions[id.slice(-2,-1)].correct[id.slice(-1)] = event.target.checked;
  }

  getTest(id:string): void {
    this.testsService.getTest(id).subscribe(res => {
        this.test = res;
        this.test.questions =   this.test.questions.map((element: any, i: number) => {
        element.correct = [false, false , false, false];
          return element;
        }); 
        this.timeLeft = res.time * 60
        this.startTimer();
        this.test.createdAt = new Date();
        this.test.duration = 0;
      });
  }

startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
        this.test.duration++;
        const format = (val:any) => `0${Math.floor(val)}`.slice(-2)
        const minutes = (this.timeLeft % 3600) / 60
      
        this.showTimeLeft =  [minutes, this.timeLeft % 60].map(format).join(':')
      } else {
        clearInterval(this.interval);
        this.submitTest()
      }
    },1000)
  }


  submitTest(): void {
    let {_id, questions, createdAt, duration} = this.test;
    questions = questions.map((q:any) => q.correct);
    this.resultsService.submitResult({test_id:_id, questions, createdAt, duration}).subscribe(()=> {
      this.router.navigate(['results'])
    })
  }

}
