import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenamecommitComponent } from './renamecommit.component';

describe('RenamecommitComponent', () => {
  let component: RenamecommitComponent;
  let fixture: ComponentFixture<RenamecommitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RenamecommitComponent]
    });
    fixture = TestBed.createComponent(RenamecommitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
