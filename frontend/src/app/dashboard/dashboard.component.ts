import { Component, OnInit } from '@angular/core';
import { ResultsService } from '../services/results.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  scores: number=100;
  durations: string= '10:00';

  constructor(private resultsService: ResultsService) { }

  ngOnInit(): void {
    this.getStats()
  }

  getStats(){
    this.resultsService.stats().subscribe(
      ([{scores, durations}])=> {
        this.scores = scores;

        const format = (val:any) => `0${Math.floor(val)}`.slice(-2)
        this.durations =  [(durations % 3600) / 60, durations % 60].map(format).join(':')
      }
    )
  }
}
