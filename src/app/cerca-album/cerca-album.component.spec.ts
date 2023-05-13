import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CercaAlbumComponent } from './cerca-album.component';

describe('CercaAlbumComponent', () => {
  let component: CercaAlbumComponent;
  let fixture: ComponentFixture<CercaAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CercaAlbumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CercaAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
