import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TapsSliderComponent } from './taps-slider.component';

describe('TapsSliderComponent', () => {
  let component: TapsSliderComponent;
  let fixture: ComponentFixture<TapsSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TapsSliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TapsSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
