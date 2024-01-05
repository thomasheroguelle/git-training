import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CherrypickComponent } from './cherrypick.component';

describe('CherrypickComponent', () => {
  let component: CherrypickComponent;
  let fixture: ComponentFixture<CherrypickComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CherrypickComponent]
    });
    fixture = TestBed.createComponent(CherrypickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
