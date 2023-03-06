import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskExpirationComponent } from './task-expiration.component';

describe('TaskExpirationComponent', () => {
  let component: TaskExpirationComponent;
  let fixture: ComponentFixture<TaskExpirationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskExpirationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskExpirationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
