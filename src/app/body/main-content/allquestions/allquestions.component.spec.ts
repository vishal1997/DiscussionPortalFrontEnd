import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllquestionsComponent } from './allquestions.component';

describe('AllquestionsComponent', () => {
  let component: AllquestionsComponent;
  let fixture: ComponentFixture<AllquestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllquestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllquestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
