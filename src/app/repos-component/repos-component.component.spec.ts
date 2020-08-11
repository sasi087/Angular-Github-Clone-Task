import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReposComponentComponent } from './repos-component.component';

describe('ReposComponentComponent', () => {
  let component: ReposComponentComponent;
  let fixture: ComponentFixture<ReposComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReposComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReposComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
