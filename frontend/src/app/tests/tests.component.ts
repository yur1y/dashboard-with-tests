import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {
  tests: number[];

  constructor() {
    this.tests = [];
   }

  ngOnInit(): void {
    this.tests = [1,2,3];
  }

}
