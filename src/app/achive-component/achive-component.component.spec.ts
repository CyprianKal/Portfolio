import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AchiveComponentComponent } from './achive-component.component';

describe('AchiveComponentComponent', () => {
  let component: AchiveComponentComponent;
  let fixture: ComponentFixture<AchiveComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AchiveComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AchiveComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
