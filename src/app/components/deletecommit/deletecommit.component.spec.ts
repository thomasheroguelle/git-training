import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletecommitComponent } from './deletecommit.component';

describe('DeletecommitComponent', () => {
  let component: DeletecommitComponent;
  let fixture: ComponentFixture<DeletecommitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeletecommitComponent]
    });
    fixture = TestBed.createComponent(DeletecommitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
