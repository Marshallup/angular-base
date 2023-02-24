import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxNComponent } from './checkbox-n.component';

describe('CheckboxNComponent', () => {
  let component: CheckboxNComponent;
  let fixture: ComponentFixture<CheckboxNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckboxNComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckboxNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
