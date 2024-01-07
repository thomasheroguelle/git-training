import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetlifyComponent } from './netlify.component';

describe('NetlifyComponent', () => {
  let component: NetlifyComponent;
  let fixture: ComponentFixture<NetlifyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NetlifyComponent]
    });
    fixture = TestBed.createComponent(NetlifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
