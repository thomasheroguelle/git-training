import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquashComponent } from './squash.component';

describe('SquashComponent', () => {
  let component: SquashComponent;
  let fixture: ComponentFixture<SquashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SquashComponent]
    });
    fixture = TestBed.createComponent(SquashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
