import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuestionsComponent } from './questions/questions.component';
import { ResultsComponent } from './results/results.component';
import { TestsAddComponent } from './tests/tests-add/tests-add.component';
import { TestsTakeComponent } from './tests/tests-take/tests-take.component';
import { TestsComponent } from './tests/tests.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'results',
    component: ResultsComponent
  },

  {
    path: 'tests',
    component: TestsComponent,
    pathMatch: 'full'    
  },
  {
    path: 'tests/add',
    component: TestsAddComponent
  },
  {
    path: 'tests/take/:id',
    component: TestsTakeComponent
  },
  {
    path: '**',  
    redirectTo: 'dashboard'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    DashboardComponent,
    TestsComponent,
    TestsAddComponent,
    ResultsComponent
  ],
  imports: [RouterModule.forRoot(routes),
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
