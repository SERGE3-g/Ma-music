import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizzaAlbumComponent } from './visualizza-album.component';

describe('VisualizzaAlbumComponent', () => {
  let component: VisualizzaAlbumComponent;
  let fixture: ComponentFixture<VisualizzaAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizzaAlbumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizzaAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
