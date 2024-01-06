import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StashComponent } from './stash.component';

describe('StashComponent', () => {
  let component: StashComponent;
  let fixture: ComponentFixture<StashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StashComponent]
    });
    fixture = TestBed.createComponent(StashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
