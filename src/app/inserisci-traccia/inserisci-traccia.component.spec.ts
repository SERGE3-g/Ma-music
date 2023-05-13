import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserisciTracciaComponent } from './inserisci-traccia.component';

describe('InserisciTracciaComponent', () => {
  let component: InserisciTracciaComponent;
  let fixture: ComponentFixture<InserisciTracciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InserisciTracciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InserisciTracciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
