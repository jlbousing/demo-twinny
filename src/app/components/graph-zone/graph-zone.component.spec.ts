import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphZoneComponent } from './graph-zone.component';

describe('GraphZoneComponent', () => {
  let component: GraphZoneComponent;
  let fixture: ComponentFixture<GraphZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphZoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
