import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmendComponent } from './amend.component';

describe('AmendComponent', () => {
  let component: AmendComponent;
  let fixture: ComponentFixture<AmendComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AmendComponent]
    });
    fixture = TestBed.createComponent(AmendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
