import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ResultsService } from '../services/results.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

  scores: number=100;
  durations: string= '10:00';
  subscription: Subscription = new Subscription();

  constructor(private resultsService: ResultsService) { }

  ngOnInit(): void {
    this.getStats()
    this.subscription = this.resultsService.resultSubmitted.subscribe(() =>    this.getStats())
  }
 
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  getStats(){
    this.resultsService.stats().subscribe(
      ([{scores, durations}])=> {
        this.scores = scores;

        const format = (val:number) => `0${Math.floor(val)}`.slice(-2)
        this.durations =  [(durations % 3600) / 60, durations % 60].map(format).join(':')
      }
    )
  }
}
