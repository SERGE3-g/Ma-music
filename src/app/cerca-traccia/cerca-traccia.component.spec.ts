import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CercaTracciaComponent } from './cerca-traccia.component';

describe('CercaTracciaComponent', () => {
  let component: CercaTracciaComponent;
  let fixture: ComponentFixture<CercaTracciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CercaTracciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CercaTracciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
