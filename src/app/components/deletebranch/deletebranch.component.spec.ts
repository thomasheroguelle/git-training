import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletebranchComponent } from './deletebranch.component';

describe('DeletebranchComponent', () => {
  let component: DeletebranchComponent;
  let fixture: ComponentFixture<DeletebranchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeletebranchComponent]
    });
    fixture = TestBed.createComponent(DeletebranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
