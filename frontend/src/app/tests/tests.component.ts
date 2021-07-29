import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestsService } from '../services/tests.service';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {
  tests: any;

  constructor(private testsService: TestsService, private router: Router) {
    this.tests = [];
   }

  ngOnInit(): void {
    this.getTests()
  }

  getTests(): void {
    this.testsService.getTests()
      .subscribe(res => { this.tests = res});
  }

}
