import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserisciAlbumComponent } from './inserisci-album.component';

describe('InserisciAlbumComponent', () => {
  let component: InserisciAlbumComponent;
  let fixture: ComponentFixture<InserisciAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InserisciAlbumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InserisciAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
