import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartHederComponent } from './start-heder.component';

describe('StartHederComponent', () => {
  let component: StartHederComponent;
  let fixture: ComponentFixture<StartHederComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartHederComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StartHederComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
