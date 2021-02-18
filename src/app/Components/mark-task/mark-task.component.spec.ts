import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkTaskComponent } from './mark-task.component';

describe('MarkTaskComponent', () => {
  let component: MarkTaskComponent;
  let fixture: ComponentFixture<MarkTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarkTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
