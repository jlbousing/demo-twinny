import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwinnyButtonGradientComponent } from './twinny-button-gradient.component';

describe('TwinnyButtonGradientComponent', () => {
  let component: TwinnyButtonGradientComponent;
  let fixture: ComponentFixture<TwinnyButtonGradientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwinnyButtonGradientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwinnyButtonGradientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
