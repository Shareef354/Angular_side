import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicResultComponent } from './academic-result.component';

describe('AcademicResultComponent', () => {
  let component: AcademicResultComponent;
  let fixture: ComponentFixture<AcademicResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademicResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
