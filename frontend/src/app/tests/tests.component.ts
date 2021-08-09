import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TestsService } from '../services/tests.service';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit, OnDestroy {
  tests: any;
  subscription: Subscription = new Subscription();

  constructor(private testsService: TestsService, private router: Router) {
    this.tests = [];
   }

  ngOnInit(): void {
    this.getTests();
    this.subscription = this.testsService.testCreated.subscribe(() =>    this.getTests())
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  getTests(): void {
    this.testsService.getTests()
      .subscribe(res => { this.tests = res});
  }

}
