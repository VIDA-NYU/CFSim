import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplanationMetricsComponent } from './explanation-metrics.component';

describe('ExplanationMetricsComponent', () => {
  let component: ExplanationMetricsComponent;
  let fixture: ComponentFixture<ExplanationMetricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExplanationMetricsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExplanationMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
