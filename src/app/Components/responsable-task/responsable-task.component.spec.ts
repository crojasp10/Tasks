import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsableTaskComponent } from './responsable-task.component';

describe('ResponsableTaskComponent', () => {
  let component: ResponsableTaskComponent;
  let fixture: ComponentFixture<ResponsableTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponsableTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsableTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
