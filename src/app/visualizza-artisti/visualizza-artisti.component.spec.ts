import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizzaArtistiComponent } from './visualizza-artisti.component';

describe('VisualizzaArtistiComponent', () => {
  let component: VisualizzaArtistiComponent;
  let fixture: ComponentFixture<VisualizzaArtistiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizzaArtistiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizzaArtistiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
