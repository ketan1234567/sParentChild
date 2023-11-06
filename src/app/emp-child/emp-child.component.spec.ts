import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpChildComponent } from './emp-child.component';

describe('EmpChildComponent', () => {
  let component: EmpChildComponent;
  let fixture: ComponentFixture<EmpChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpChildComponent]
    });
    fixture = TestBed.createComponent(EmpChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
