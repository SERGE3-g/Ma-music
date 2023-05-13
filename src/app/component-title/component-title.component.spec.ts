import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentTitleComponent } from './component-title.component';

describe('ComponentTitleComponent', () => {
  let component: ComponentTitleComponent;
  let fixture: ComponentFixture<ComponentTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
