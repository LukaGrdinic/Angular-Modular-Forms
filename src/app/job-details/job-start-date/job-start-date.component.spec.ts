import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobStartDateComponent } from './job-start-date.component';

describe('JobStartDateComponent', () => {
  let component: JobStartDateComponent;
  let fixture: ComponentFixture<JobStartDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobStartDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobStartDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
