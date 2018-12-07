import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HshDlComponent } from './hsh-dl.component';

describe('HshDlComponent', () => {
  let component: HshDlComponent;
  let fixture: ComponentFixture<HshDlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HshDlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HshDlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
