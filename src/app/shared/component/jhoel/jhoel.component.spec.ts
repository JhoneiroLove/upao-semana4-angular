import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JhoelComponent } from './jhoel.component';

describe('JhoelComponent', () => {
  let component: JhoelComponent;
  let fixture: ComponentFixture<JhoelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JhoelComponent]
    });
    fixture = TestBed.createComponent(JhoelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
