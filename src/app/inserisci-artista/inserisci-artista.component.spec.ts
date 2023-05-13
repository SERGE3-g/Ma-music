import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserisciArtistaComponent } from './inserisci-artista.component';

describe('InserisciArtistaComponent', () => {
  let component: InserisciArtistaComponent;
  let fixture: ComponentFixture<InserisciArtistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InserisciArtistaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InserisciArtistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
