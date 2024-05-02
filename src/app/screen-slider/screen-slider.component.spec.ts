import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenSliderComponent } from './screen-slider.component';

describe('ScreenSliderComponent', () => {
  let component: ScreenSliderComponent;
  let fixture: ComponentFixture<ScreenSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScreenSliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScreenSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
