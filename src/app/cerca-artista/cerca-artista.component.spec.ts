import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CercaArtistaComponent } from './cerca-artista.component';

describe('CercaArtistaComponent', () => {
  let component: CercaArtistaComponent;
  let fixture: ComponentFixture<CercaArtistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CercaArtistaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CercaArtistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
