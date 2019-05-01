import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorCodedGraphComponent } from './color-coded-graph.component';

describe('ColorCodedGraphComponent', () => {
  let component: ColorCodedGraphComponent;
  let fixture: ComponentFixture<ColorCodedGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorCodedGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorCodedGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
