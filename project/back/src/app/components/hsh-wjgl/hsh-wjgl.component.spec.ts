import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HshWjglComponent } from './hsh-wjgl.component';

describe('HshWjglComponent', () => {
  let component: HshWjglComponent;
  let fixture: ComponentFixture<HshWjglComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HshWjglComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HshWjglComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
