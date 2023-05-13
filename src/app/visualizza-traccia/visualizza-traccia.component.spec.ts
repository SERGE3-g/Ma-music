import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizzaTracciaComponent } from './visualizza-traccia.component';

describe('VisualizzaTracciaComponent', () => {
  let component: VisualizzaTracciaComponent;
  let fixture: ComponentFixture<VisualizzaTracciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizzaTracciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizzaTracciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
