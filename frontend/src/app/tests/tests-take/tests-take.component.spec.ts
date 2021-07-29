import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestsTakeComponent } from './tests-take.component';

describe('TestsTakeComponent', () => {
  let component: TestsTakeComponent;
  let fixture: ComponentFixture<TestsTakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestsTakeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestsTakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
